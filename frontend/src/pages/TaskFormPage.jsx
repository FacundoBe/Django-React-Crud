import { useForm } from "react-hook-form"
import { createTask, getTaskById, updateTask } from "../api/tasks.api"
import { useNavigate, useParams } from 'react-router-dom'
import { deleteTask } from "../api/tasks.api"
import { useEffect } from "react"
import { toast } from 'react-hot-toast'

export default function TaskFormPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (params.id) {

            async function loadTask() {
                const { data } = await getTaskById(params.id)
                setValue('title', data.title)
                setValue('description', data.description)
            }

            loadTask()
        }
    }
        , [])



    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateTask(params.id, data)
            toast.success("Se ha editado la tarea correctamente",
                {style: { borderRadius: '10px', background: '#333',    color: '#fff', }}
            )
        }
        else {
            await createTask(data)
            toast.success("Se ha creado la tarea correctamente", 
                {style: { borderRadius: '10px', background: '#333',    color: '#fff', }}
            )
        }
        navigate("/")
    })

    async function handleDelete() {
        const accepted = window.confirm('Delete this task?')
        if (accepted) {
            const res = await deleteTask(params.id)
            console.log(res)
            navigate("/")
        }
    }

    return (
        <div>
            <form className="task-form" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    className="title-input"
                    {...register("title", { required: true })}
                />
                {errors.title && <span> Name field is Mandatory </span>}
                <textarea
                    className="description-textbox"
                    placeholder="Description.."
                    {...register("description", { required: true })}
                />
                {errors.description && <span> Description is mandatory </span>}
                <button type="submit" >Save </button>
                {params?.id && <button type="button" onClick={handleDelete}> Delete </button>}
            </form>
        </div>
    )
}
import { useForm } from "react-hook-form"
import { createTask } from "../api/tasks.api"
import { useNavigate, useParams } from 'react-router-dom'
import { deleteTask } from "../api/tasks.api"

export default function TaskFormPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate = useNavigate()
    const params = useParams()
    console.log("params", params)

    const onSubmit = handleSubmit(async (data) => {
        await createTask(data)
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
                {params?.id && <button onClick={handleDelete}> Delete </button>}
            </form>
        </div>
    )
}
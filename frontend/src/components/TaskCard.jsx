/* eslint-disable react/prop-types */
import {useNavigate} from 'react-router-dom' 

export default function TaskCard({task}) {
    const navigate = useNavigate()
        
    return (
        <div onClick={()=> navigate(`/tasks/${task.id}`)}>
            <p>{task.title}</p>
            <p>{task.description}</p>

        </div>
    )
}
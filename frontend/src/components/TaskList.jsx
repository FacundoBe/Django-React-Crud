/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import {getTasks} from "../api/tasks.api"
import TaskCard from "./TaskCard"

export default function TaskList() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks().then(res => setTasks(res.data))
    }, [])



    return (
        <div>
            {
                tasks.map(task => (
                   <TaskCard key={task.id} task={task} />
                )
                )
            }
        </div>
    )
}
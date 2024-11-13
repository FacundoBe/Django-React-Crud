import {Link } from 'react-router-dom'

export default function Navigation() {

    return (
        <nav style={{display:"flex", gap:"15px"}}>
            <Link to="/">Home </Link>
            <Link to="/tasks-create"> Create task</Link>
        </nav>
    )
}
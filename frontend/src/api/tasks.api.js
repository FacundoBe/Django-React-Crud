import axios from 'axios'

export default function getTasks() {

 return axios.get('http://127.0.0.1:8000/tasks/api/v1/taskslist/' )
 
}

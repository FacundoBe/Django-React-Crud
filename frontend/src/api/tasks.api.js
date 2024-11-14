import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/tasks/api/v1/taskslist/'

export function getTasks() {

    return axios.get(BASE_URL)
}

export function createTask(task) {

    return axios.post(BASE_URL, task)
}

export function deleteTask(id) {
    return axios.delete(`${BASE_URL}${id}/`)
}

import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/tasks/api/v1/taskslist/'

export function getTasks() {    // Con funcion normal
    return axios.get(BASE_URL)
}

export function createTask(task) {

    return axios.post(BASE_URL, task)
}

export function deleteTask(id) {
    return axios.delete(`${BASE_URL}${id}/`)
}

export const updateTask = (id, editedTask) => axios.put(`${BASE_URL}${id}/`, editedTask)  //forma resumida con funcion flecha

export const getTaskById = (id) => axios.get(`${BASE_URL}${id}/`) 
import { handleResponse, requestOptions } from '@/_helpers';

export const taskService = {
    getAll,
    getById,
    createTask,
    editTask,
    deleteTask
};

let apiUrl = "http://127.0.0.1:8000/api";

function getAll() {
    return fetch(`${apiUrl}/tasks`, requestOptions.get())
        .then(handleResponse);
}

function getById(id) {
    return fetch(`${apiUrl}/tasks/${id}`, requestOptions.get())
        .then(handleResponse);
}

function createTask(body) {
    return fetch(`${apiUrl}/tasks`, requestOptions.post(body))
        .then(handleResponse);
}

function editTask(id, body) {
    return fetch(`${apiUrl}/tasks/${id}`, requestOptions.path(body))
        .then(handleResponse);
}

function deleteTask(id) {
    return fetch(`${apiUrl}/tasks/${id}`, requestOptions.delete())
        .then(handleResponse);
}
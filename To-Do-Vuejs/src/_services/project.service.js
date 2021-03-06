import { handleResponse, requestOptions } from '@/_helpers';

export const projectService = {
    getAll,
    getById,
    createProject,
    editProject,
    deleteProject
};

let apiUrl = "http://127.0.0.1:8000/api";

function getAll() {
    return fetch(`${apiUrl}/projects`, requestOptions.get())
        .then(handleResponse);
}

function getById(id) {
    return fetch(`${apiUrl}/projects/${id}`, requestOptions.get())
        .then(handleResponse);
}

function createProject(body) {
    return fetch(`${apiUrl}/projects`, requestOptions.post(body))
        .then(handleResponse);
}

function editProject(id, body) {
    return fetch(`${apiUrl}/projects/${id}`, requestOptions.path(body))
        .then(handleResponse);
}

function deleteProject(id) {
    return fetch(`${apiUrl}/projects/${id}`, requestOptions.delete())
        .then(handleResponse);
}
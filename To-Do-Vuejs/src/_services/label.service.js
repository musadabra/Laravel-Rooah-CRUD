import { handleResponse, requestOptions } from '@/_helpers';

export const labelService = {
    getAll,
    getById,
    createLabel,
    editLabel,
    deleteLabel
};

let apiUrl = "http://127.0.0.1:8000/api";

function getAll() {
    return fetch(`${apiUrl}/labels`, requestOptions.get())
        .then(handleResponse);
}

function getById(id) {
    return fetch(`${apiUrl}/labels/${id}`, requestOptions.get())
        .then(handleResponse);
}

function createLabel(body) {
    return fetch(`${apiUrl}/labels`, requestOptions.post(body))
        .then(handleResponse);
}

function editLabel(id, body) {
    return fetch(`${apiUrl}/labels/${id}`, requestOptions.path(body))
        .then(handleResponse);
}

function deleteLabel(id) {
    return fetch(`${apiUrl}/labels/${id}`, requestOptions.delete())
        .then(handleResponse);
}
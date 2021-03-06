import config from 'config';
import { handleResponse, requestOptions } from '@/_helpers';

export const userService = {
    getAll,
    getById,
    getUser
};

let apiUrl = "http://127.0.0.1:8000/api/auth";

function getAll() {
    return fetch(`${apiUrl}/users`, requestOptions.get())
        .then(handleResponse);
}

function getById(id) {
    return fetch(`${apiUrl}/user-profile/${id}`, requestOptions.get())
        .then(handleResponse);
}

function getUser() {
    console.log(requestOptions.get());
    return fetch(`${apiUrl}/user-profile/`, requestOptions.get())
        .then(handleResponse);
}
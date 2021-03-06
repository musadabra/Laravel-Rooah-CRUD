import { BehaviorSubject } from 'rxjs';

import config from 'config';
import { requestOptions, handleResponse } from '@/_helpers';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    signup,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};
// `${config.apiUrl}/users/authenticate
function login(email, password) {
    return fetch(`http://127.0.0.1:8000/api/auth/login`, requestOptions.post({ email, password }))
        .then(handleResponse)
        .then(user => {

            let name = user.user.name;
            let email = user.user.email;
            let token = user.access_token;

            let usernew = {
                name,
                email,
                token,
            }

            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(usernew));
            currentUserSubject.next(usernew);

            return usernew;
        });
}

function signup(name, email, password, password_confirmation) {
    return fetch(`http://127.0.0.1:8000/api/auth/register`, requestOptions.post({ name, email, password, password_confirmation }))
        .then(handleResponse)
        .then(user => {

            let name = user.user.name;
            let email = user.user.email;
            let token = user.access_token;

            let usernew = {
                name,
                email,
                token,
            }

            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(usernew));
            currentUserSubject.next(usernew);

            return usernew;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

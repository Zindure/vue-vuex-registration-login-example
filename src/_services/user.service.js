import config from 'config';
import { authHeader } from '../_helpers';
//import {post} from "./api";
const base = 'http://localhost:3000';

export const userService = {
    login,
    logout,
    register,
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch(`${base}/users/login`, requestOptions).then(handleResponse);

}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch(`${base}/users/register`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        if (response.status === 200){
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    logout();
                    location.reload(true);
                }
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            if (data.jwt){
                alert(data.jwt);
                let JWT = data.jwt;
            }
        }

        return data;
    });
}
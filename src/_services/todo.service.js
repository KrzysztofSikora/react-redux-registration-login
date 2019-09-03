import { authHeader } from '../_helpers';
import  * as routes from '../_helpers/routes'
import {alertActions} from "../_actions";

export const todoService = {
    getOneToDo,
    getAllToDo,
    createToDo,
    updateToDo,
    deleteById,
    deleteAll
};

function getOneToDo(id) {
    return new Promise(
        (resolve, reject) => apiCallWithHeader(routes.toDoItemsApiUrl(id), 'GET', authHeader(), resolve, reject));
}
function getAllToDo() {
     return new Promise(
         (resolve, reject) => apiCallWithHeader(routes.toDoItemsApiUrl(), 'GET', authHeader(), resolve, reject));
}

function createToDo(body) {
    return new Promise(
        (resolve, reject) => apiCallWithHeaderAndBody(routes.toDoItemsApiUrl(), 'POST', authHeader(), body, resolve, reject));
}

function updateToDo(id, body) {
    return new Promise(
        (resolve, reject) => apiCallWithHeaderAndBody(routes.toDoItemsApiUrl(id), 'PUT', authHeader(), body, resolve, reject));
}

function deleteById(id) {
    return new Promise(
        (resolve, reject) => apiCallWithHeader(routes.toDoItemsApiUrl(id), 'DELETE', authHeader(), resolve, reject));
}

function deleteAll() {
    return new Promise(
        (resolve, reject) => apiCallWithHeader(routes.toDoItemsDeleteAllApiUrl(), 'DELETE', authHeader(), resolve, reject));
}

const apiCallWithHeader = (url, method, header, resolve, reject) =>
    fetch(url, {
        method: method,
        headers: header
    }).then(response => {
        if(response.ok) {
            response.json().then(json=> resolve(json))
        } else {

            localStorage.removeItem('user');
        }
    });

const apiCallWithHeaderAndBody = (url, method, header, body, resolve, reject) =>
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...header
        },
        withCredentials: true,
        body :JSON.stringify(body)
    }).then(response => {
        if(response.ok) {
            response.json().then(json=> resolve(json))
        } else {
            reject(response)
        }
    });


import config from 'config';
import { authHeader } from '../_helpers';
import  * as routes from '../_helpers/routes'

import * as api from './../_helpers/api'


export const todoService = {
    getAllToDo,
    createToDo,
    updateToDo,
    deleteById,
    deleteAll
};




function getAllToDo() {
     return new Promise(
         (resolve, reject) => apiCallWithHeader(routes.toDoItemsApiUrl(), 'GET', authHeader(), resolve, reject));
}


function createToDo(body) {
    return new Promise(
        (resolve, reject) => apiCallWithHeaderAndBody(routes.toDoItemsApiUrl(), 'POST', authHeader(), body, resolve, reject));
}

function updateToDo() {

}

function deleteById() {

}

function deleteAll() {

}

const apiCallWithHeader = (url, method, header, resolve, reject) =>
    fetch(url, {
        method: method,
        headers: header
    }).then(response => {
        if(response.ok) {
            response.json().then(json=> resolve(json))
        } else {
            reject(response)
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


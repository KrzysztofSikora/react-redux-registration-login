import { authHeader } from '../_helpers';
import  * as routes from '../_helpers/routes'

export const contentsService = {
    getOneContents,
    getAllContents,
    createContents,
    updateContents,
    deleteById,
    deleteAll
};

function getOneContents(id) {
    return new Promise(
        (resolve, reject) => apiCallWithHeader(routes.contentsItemsApiUrl(id), 'GET', authHeader(), resolve, reject));
}
function getAllContents() {
     return new Promise(
         (resolve, reject) => apiCallWithHeader(routes.contentsItemsApiUrl(), 'GET', authHeader(), resolve, reject));
}

function createContents(body) {
    return new Promise(
        (resolve, reject) => apiCallWithHeaderAndBody(routes.contentsItemsApiUrl(), 'POST', authHeader(), body, resolve, reject));
}

function updateContents(id, body) {
    return new Promise(
        (resolve, reject) => apiCallWithHeaderAndBody(routes.contentsItemsApiUrl(id), 'PUT', authHeader(), body, resolve, reject));
}

function deleteById(id) {
    return new Promise(
        (resolve, reject) => apiCallWithHeader(routes.contentsItemsApiUrl(id), 'DELETE', authHeader(), resolve, reject));
}

function deleteAll() {
    return new Promise(
        (resolve, reject) => apiCallWithHeader(routes.contentsItemsApiUrl(), 'DELETE', authHeader(), resolve, reject));
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


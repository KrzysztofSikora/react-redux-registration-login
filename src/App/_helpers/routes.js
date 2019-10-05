const serverUrl = 'http://localhost:3000/api';

export const contentsItemsApiUrl = id =>
    id ? `${serverUrl}/content/${id}` : `${serverUrl}/content`;

export const toDoItemsCreateApiUrl = () =>
    `${serverUrl}/todo`;

export const toDoItemsDeleteAllApiUrl = () =>
    `${serverUrl}/todo/delete-all`;

export const userApiUrl = id =>
    id ? `${serverUrl}/users/${id}` : `${serverUrl}/users`;

export const userRegisterApiUrl = () =>
    `${serverUrl}/auth/singup`;

export const userLoginApiUrl = () =>
    `${serverUrl}/auth/signin`;



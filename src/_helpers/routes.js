const serverUrl = 'https://basic.vue/api/v1';

export const toDoItemsApiUrl = id =>
    id ? `${serverUrl}/todo/${id}` : `${serverUrl}/todo`;

export const toDoItemsCreateApiUrl = () =>
    `${serverUrl}/todo`;

export const toDoItemsDeleteAllApiUrl = () =>
    `${serverUrl}/todo/delete-all`;

export const userApiUrl = id =>
    id ? `${serverUrl}/users/${id}` : `${serverUrl}/users`;

export const userRegisterApiUrl = () =>
    `${serverUrl}/register`;

export const userLoginApiUrl = () =>
    `${serverUrl}/login`;



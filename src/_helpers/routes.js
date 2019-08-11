const serverUrl = 'https://basic.vue/api/v1';

export const toDoItemsApiUrl = id =>
    id ? `${serverUrl}/todo/${id}` : `${serverUrl}/todo`;

export const toDoItemsCreateApiUrl = () =>
    `${serverUrl}/todo`;

export const toDoItemsDeleteAllApiUrl = () =>
    `${serverUrl}/todo/delete-all`;


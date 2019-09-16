import { todoConstants } from '../_constants';
import { todoService } from '../_services';



export const getOneToDos = (id) =>
    async (dispatch) => {
        try {
            let response = await todoService.getOneToDo(id);
            response = response.data;
            dispatch({ type: todoConstants.GET_ONE_SUCCESS, response })
        } catch (e) {
            dispatch({ type: todoConstants.GET_ONE_FAILURE, error: e.statusText})
        }
    };


export const getAllToDos = () =>
    async (dispatch) => {
        try {
            let response = await todoService.getAllToDo();
            response = response.data;
            dispatch({ type: todoConstants.GETALL_SUCCESS, response })
        } catch (e) {
            dispatch({ type: todoConstants.GETALL_FAILURE, error: e.statusText})
        }
    };

export const removeToDo = (id) =>
    async (dispatch) => {
        try {
            await todoService.deleteById(id);
            dispatch({ type: todoConstants.DELETE_SUCCESS, id})
        } catch (e) {
            dispatch({ type: todoConstants.DELETE_FAILURE, error: e.statusText})
            // relocation to login
        }
    };

export const createToDo = (body) =>
    async (dispatch) => {
        try {
            let response = await todoService.createToDo(body);
            response = response.data;
            dispatch({type: todoConstants.CREATE_SUCCESS, response})
        } catch (e) {
            dispatch({type: todoConstants.CREATE_FAILURE, error: e.statusText})
        }
    };


export const updateToDo = (id, body) =>
    async (dispatch) => {
        try {
            console.log(body)
            let response  = await todoService.updateToDo(id,body);
            console.log("response", response.data)
            response = response.data;
            dispatch({type: todoConstants.UPDATE_SUCCESS, response})
        } catch (e) {
            dispatch({type: todoConstants.UPDATE_FAILURE, error: e.statusText})
        }
    };


export const removeAll = () =>
    async (dispatch) => {
        try {
            await todoService.deleteAll();
            dispatch({type: todoConstants.DELETE_ALL_SUCCESS})
        } catch (e) {
            dispatch({type: todoConstants.DELETE_ALL_FAILURE, error: e.statusText})

        }
    };
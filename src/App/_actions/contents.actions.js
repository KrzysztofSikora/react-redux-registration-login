import { contentsConstants } from '../_constants';
import { contentsService } from '../_services';

export const getOneContents = (id) =>
    async (dispatch) => {
        try {
            let response = await contentsService.getOneContents(id);
            dispatch({ type: contentsConstants.GET_ONE_SUCCESS, response })
        } catch (e) {
            dispatch({ type: contentsConstants.GET_ONE_FAILURE, error: e.statusText})
        }
    };


export const getAllContents = () =>
    async (dispatch) => {
        try {
            let response = await contentsService.getAllContents();
            dispatch({ type: contentsConstants.GETALL_SUCCESS, response })
        } catch (e) {
            dispatch({ type: contentsConstants.GETALL_FAILURE, error: e.statusText})
        }
    };

export const removeContents = (id) =>
    async (dispatch) => {
        try {
            await contentsService.deleteById(id);
            dispatch({ type: contentsConstants.DELETE_SUCCESS, id})
        } catch (e) {
            dispatch({ type: contentsConstants.DELETE_FAILURE, error: e.statusText})
            // relocation to login
        }
    };

export const createContents = (body) =>
    async (dispatch) => {
        try {
            let response = await contentsService.createContents(body);
            dispatch({type: contentsConstants.CREATE_SUCCESS, response})
        } catch (e) {
            dispatch({type: contentsConstants.CREATE_FAILURE, error: e.statusText})
        }
    };


export const updateContents = (id, body) =>
    async (dispatch) => {
        try {
            let response  = await contentsService.updateContents(id,body);
            dispatch({type: contentsConstants.UPDATE_SUCCESS, response})
        } catch (e) {
            dispatch({type: contentsConstants.UPDATE_FAILURE, error: e.statusText})
        }
    };


export const removeAll = () =>
    async (dispatch) => {
        try {
            await contentsService.deleteAll();
            dispatch({type: contentsConstants.DELETE_ALL_SUCCESS})
        } catch (e) {
            dispatch({type: contentsConstants.DELETE_ALL_FAILURE, error: e.statusText})
        }
    };

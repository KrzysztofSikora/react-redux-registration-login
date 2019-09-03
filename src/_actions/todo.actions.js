import { todoConstants } from '../_constants';
import { todoService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const todoActions = {
    getAll

};

function getAll() {
    return dispatch => {
        dispatch(request());
        todoService.getAllToDo()
            .then(
                response => {
                    dispatch(success(response))
                    dispatch(alertActions.success("Get all todos sucessfull"))
                },
                error => {
                    dispatch(failure(error.toString())) && dispatch()
                }
            );
    };

    function request() { return { type: todoConstants.GETALL_REQUEST } }
    function success(response) { return { type: todoConstants.GETALL_SUCCESS, response } }
    function failure(error) { return { type: todoConstants.GETALL_FAILURE, error } }
}

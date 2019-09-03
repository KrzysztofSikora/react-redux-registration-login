import { todoConstants } from '../_constants';
//@todo make it as reducer todo
export function todo(state = {}, action) {
    switch (action.type) {
        case todoConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case todoConstants.GETALL_SUCCESS:
            return {
                items: action.response.data
            };
        case todoConstants.GETALL_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}

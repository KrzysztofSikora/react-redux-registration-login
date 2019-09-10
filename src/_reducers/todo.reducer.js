import { todoConstants } from '../_constants';
//@todo make it as reducer todo
export function todo(state = {}, action) {
    switch (action.type) {
        case todoConstants.GET_ONE_SUCCESS:
            return {
                item: action.response
            };

        case todoConstants.GET_ONE_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case todoConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case todoConstants.GETALL_SUCCESS:
            return {
                items: action.response
            };
        case todoConstants.GETALL_TEST:
            return {
                items: action.item
            };
        case todoConstants.GETALL_FAILURE:
            return {
                error: action.error
            };

        case todoConstants.CREATE_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.response]
            };

        case todoConstants.CREATE_FAILURE:
            return {
                ...state,
                error: action.error
            };

        case todoConstants.UPDATE_SUCCESS:
            return {
                ...state,
                items: doneUpdate(state, action.id)
            };
        case todoConstants.UPDATE_FAILURE:
            return {
                ...state,
                error: action.error
            };

        case todoConstants.DELETE_SUCCESS:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id)

            };
            // todo add redirection
        case todoConstants.DELETE_FAILURE:
            return {
                ...state,
                error: action.error
            };

        case todoConstants.DELETE_ALL_SUCCESS:
            return {
                ...state,
                items: []

            };
        case todoConstants.DELETE_ALL_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
}


const doneUpdate = function (state, id) {
    let arr = [];
    state.items.forEach(function (k) {
        if(k.id === id) {
            k.done = !k.done;
            arr.push(k)
        } else {
            arr.push(k)
        }
    });
    return arr;
};
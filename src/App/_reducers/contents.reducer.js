import { contentsConstants } from '../_constants';
export function contents(state = {}, action) {
    switch (action.type) {
        case contentsConstants.GET_ONE_SUCCESS:
            return {
                ...state,
                item: action.response
            };

        case contentsConstants.GET_ONE_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case contentsConstants.GETALL_REQUEST:
            return {
                loading: true
            };
            // ready
        case contentsConstants.GETALL_SUCCESS:
            return {
                ...state,
                items: action.response
            };
        case contentsConstants.GETALL_FAILURE:
            return {
                error: action.error
            };

        case contentsConstants.CREATE_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.response]
            };
        case contentsConstants.CREATE_FAILURE:
            return {
                ...state,
                error: action.error
            };

        case contentsConstants.UPDATE_SUCCESS:
            return {
                ...state,
                items: doneUpdate(state, action.response)
            };
        case contentsConstants.UPDATE_FAILURE:
            return {
                ...state,
                error: action.error
            };

        case contentsConstants.DELETE_SUCCESS:
            return {
                ...state,
                items: state.items.filter(content => content.id !== action.id)

            };
            // todo add redirection
        case contentsConstants.DELETE_FAILURE:
            return {
                ...state,
                error: action.error
            };

        case contentsConstants.DELETE_ALL_SUCCESS:
            return {
                ...state,
                items: []

            };
        case contentsConstants.DELETE_ALL_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
}


const doneUpdate = function (state, response) {
    let arr = [];
    state.items.forEach(function (k) {
        if(k.id === response.id) {
            k = response;
            arr.push(k)
        } else {
            arr.push(k)
        }
    });
    return arr;
};

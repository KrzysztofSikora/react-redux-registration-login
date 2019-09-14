import { todoConstants } from '../_constants';
export function todo(state = {}, action) {
    switch (action.type) {
        case todoConstants.GET_ONE_SUCCESS:
            return {
                ...state,
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
                ...state,
                items: action.response
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
                items: doneUpdate(state, action.response)
            };


        case todoConstants.UPDATE_LOCATION:


            return {
               ...state,
                item: updateLocation(state.item, action)
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

const updateLocation = function (state, action) {
    state.lat = action.location.lat;
    state.lng = action.location.lng;
    return state;
}
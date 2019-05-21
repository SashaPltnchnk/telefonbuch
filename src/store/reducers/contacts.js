import * as actionTypes from '../actions/contacts';
import { error, success } from 'redux-saga-requests';

const initialState = {
    contacts: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case success(actionTypes.FETCH_CONTACTS):
            return {
                ...state,
                contacts: action.data
            };
        case error(actionTypes.FETCH_CONTACTS): 
            console.error(action.error.message)
            return state;
        // case success()    

        default: return state;
    }  
}

export default reducer;
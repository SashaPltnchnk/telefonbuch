import * as actionTypes from '../actions/modal';

const initialState = {
    isModalOpen: false
}

const modal = (state = initialState, action) => {
    switch(action.type) {  
        case actionTypes.CLOSE_MODAL: 
            return {
                ...state,
                isModalOpen: false
            }
        case actionTypes.OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true
            }
        default: return state;
    }  
}

export default modal;
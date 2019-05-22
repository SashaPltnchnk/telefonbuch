import * as actionTypes from '../actions/modal';

const initialState = {
    isAddContactModalOpen: false,
    isEditContactModalOpen: false,
    id: null
}

const modal = (state = initialState, action) => {
    switch(action.type) {  
        case actionTypes.ADD_CONTACT_CLOSE_MODAL: 
            return {
                ...state,
                isAddContactModalOpen: false
            }
        case actionTypes.ADD_CONTACT_OPEN_MODAL:
            return {
                ...state,
                isAddContactModalOpen: true,
                isEditContactModalOpen: false
            }
        case actionTypes.EDIT_CONTACT_CLOSE_MODAL:
            return {
                ...state,
                isEditContactModalOpen: false
            }
        case actionTypes.EDIT_CONTACT_OPEN_MODAL:
            return {
                ...state,
                isEditContactModalOpen: true,
                isAddContactModalOpen: false,
                id: action.id
            }
        default: return state;
    }  
}

export default modal;
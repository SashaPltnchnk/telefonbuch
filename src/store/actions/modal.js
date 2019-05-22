export const ADD_CONTACT_CLOSE_MODAL = 'ADD_CONTACT_CLOSE_MODAL';
export const ADD_CONTACT_OPEN_MODAL = 'ADD_CONTACT_OPEN_MODAL';
export const EDIT_CONTACT_OPEN_MODAL = 'EDIT_CONTACT_OPEN_MODAL';
export const EDIT_CONTACT_CLOSE_MODAL = 'EDIT_CONTACT_CLOSE_MODAL';

export const addContactCloseModal = () => ({
    type: ADD_CONTACT_CLOSE_MODAL
})

export const addContactOpenModal = () => ({
    type: ADD_CONTACT_OPEN_MODAL
})

export const editContactCloseModal = () => ({
    type: EDIT_CONTACT_CLOSE_MODAL
})

export const editContactOpenModal = (id) => ({
    type: EDIT_CONTACT_OPEN_MODAL,
    id
})
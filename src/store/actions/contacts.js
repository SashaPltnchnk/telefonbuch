export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const CREATE_CONTACT = 'CREATE_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';

export const fetchContacts = () => ({
    type: FETCH_CONTACTS,
    request: {
        url: '/contacts/',
        method: 'GET'
    }
});

export const createContact = (data) => ({
    type: CREATE_CONTACT,
    request: {
        url: '/contacts/',
        method: 'POST',
        data
    },
    meta: {
        asPromise: true
    }
});

export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    request: {
        url: `/contacts/${id}`,
        method: 'DELETE'
    },
    meta: {
        asPromise: true
    }
});

export const editContact = (data, id) => ({
    type: EDIT_CONTACT,
    request: {
        url: `/contacts/${id}`,
        method: 'PUT',
        data
    },
    meta: {
        asPromise: true
    }
});
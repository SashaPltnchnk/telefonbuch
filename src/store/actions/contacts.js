

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const CREATE_CONTACT = 'CREATE_CONTACT';

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
    }
});
export function changeSearchValue(value) {
    return dispatch => {
        return dispatch({ type: 'CHANGE_SEARCH_VALUE', value })
    }
}

export function setContacts(contacts) {
    return dispatch => {
        return dispatch({ type: 'SET_CONTACTS', contacts})
    }
}
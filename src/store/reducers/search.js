// import _ from 'lodash'

const initialState = {
    search: '',
    contacts: [],
}

export default function(state = initialState, action) {
    // const newState = _.cloneDeep(state)


    switch(action.type) {
        case 'CHANGE_SEARCH_VALUE': {
            return {
                ...state,
                search: action.value
            }
        }

        case 'SET_CONTACTS': {
            return {
                ...state,
                contacts: action.contacts
            }
        }

        default: {
            return state
        }
    }
}
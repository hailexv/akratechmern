import * as Actions from '../../actions/contact';

const initialState = {
    contacts: null,
    selectedContact: null,
    deleteContact: false,
    deletingContact: null,
    counter: 10
};

const contact = function (state = initialState, action) {

    switch ( action.type )
    {

        case Actions.GET_CONTACTS:
        {
            return {
                ...state,
                contacts  : action.payload
            };
        }
        case Actions.SELECT_CONTACT:
        {
            return {
                ...state,
                selectedContact  : action.payload   
                
            };
        }
        case Actions.DELETE_CONTACT:
        {
            return {
                ...state,
                deleteContact  : true
                
            };
        }
        case Actions.SET_DELETING_CONTACT:
        {
            return {
                ...state,
                deletingContact  : action.payload
                
            };
        }
        case Actions.CANCEL_DELETE:
        {
            return {
                ...state,
                deleteContact  : false
                
            };
        }
        case Actions.SET_COUNTER:
        {
            console.log('set counter called')
            return {
                ...state,
                counter  : action.payload
                
            };
        }
        default:
        {
            return state
        }

    }

}

export default contact;
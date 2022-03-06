import * as Actions from '../../actions/contact';

const initialState = {
    contacts: null
};

const contact = function (state = initialState, action) {

    switch ( action.type )
    {

        case Actions.GET_CONTACTS:
        {
            return {
                ...initialState,
                contacts  : action.payload
            };
        }
        default:
        {
            return state
        }

    }

}

export default contact;
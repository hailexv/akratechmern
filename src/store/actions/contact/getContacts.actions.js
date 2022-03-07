import axios from "axios";

export const GET_CONTACTS = 'GET_CONTACTS';
export const SELECT_CONTACT = 'SELECT_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const SET_DELETING_CONTACT = 'SET_DELETING_CONTACT';
export const CANCEL_DELETE = 'CANCEL_DELETE';
export const SET_COUNTER = 'SET_COUNTER';


export function getContacts()
{

    return (dispatch) =>
        axios
            .get(`https://randomuser.me/api/?results=4`)
            .then(res => {  

                dispatch({
                    type   : GET_CONTACTS,
                    payload: res.data.results
                });

            }).catch(error => {

                console.log(error)

        })
}

export function selectContact(contact)
{

    return (dispatch) =>
       
        dispatch({
            type   : SELECT_CONTACT,
            payload: contact
        });

}

export function removeContact(contacts)
{

    return (dispatch) =>
       
    dispatch({
        type   : GET_CONTACTS,
        payload: contacts
    });

}

export function deleteContact()
{

    return (dispatch) =>
       
        dispatch({
            type   : DELETE_CONTACT
        });

}

export function deletingContact(email)
{

    return (dispatch) =>
       
        dispatch({
            type   : SET_DELETING_CONTACT,
            payload : email
        });


}

export function cancelDelete()
{

    return (dispatch) =>
       
        dispatch({
            type   : CANCEL_DELETE
        });

}

export function setCounter(value)
{

    return (dispatch) =>
       
        dispatch({
            type   : SET_COUNTER,
            payload: value
        });

}
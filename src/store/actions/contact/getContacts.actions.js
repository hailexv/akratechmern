import axios from "axios";

export const GET_CONTACTS = 'GET_CONTACTS';


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
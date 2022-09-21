// import { createReducer } from "@reduxjs/toolkit";
// import { addNewContact } from "./actions";
import shortid from "shortid";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    contacts: {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    }
};

export const phonebookReducer = (state = initialState, action) => {
    // console.log(state);
    console.log(action);
    
    if (!action.payload) {
        return state;
    };

    const { items } = state.contacts;
    const { name, number } = action.payload;
    
    const checkContact = items.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (checkContact === true) {
        toast.warn(`${name} is already in contacts`, { theme: "colored", });
        return state;
    };

    const newContact = {
        id: shortid.generate(),
        name,
        number,
    };
    switch (action.type) {
        case "contact/addNewContact":
            return {
                contacts: {
                    ...state.contacts,
                    items: [newContact, ...state.contacts.items],
                }
            };
        default:
            return state;
    };
};
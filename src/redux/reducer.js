import { createReducer } from "@reduxjs/toolkit";
import { addNewContact, deleteContact, setFilter } from "./actions";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const phonebookReducer = createReducer(initialState, {
    [addNewContact](state, action) {
        state.contacts.items.splice(0, 0, action.payload);
    },
    [deleteContact](state, action) {
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
    },
    [setFilter](state, action) {
        state.contacts.filter = action.payload;
    },
});

const persistConfig = {
    key: 'root',
    storage,
};

export const persistedReducer = persistReducer(persistConfig, phonebookReducer);

// Код для редюсера на чистому Redux👇

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialState = {
//     contacts: {
//         items: [
//             { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//             { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//             { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//             { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//         ],
//         filter: '',
//     },
// };

// const phonebookReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "contact/addNewContact":
//             return {
//                 contacts: {
//                     ...state.contacts,
//                     items: [action.payload, ...state.contacts.items],
//                 }
//             };
//         case "contact/deleteContact":
//             return {
//                 contacts: {
//                     ...state.contacts,
//                     items: state.contacts.items.filter(contact => contact.id !== action.payload)
//                 }
//             };
//         case "filter/setFilter":
//             return {
//                 contacts: {
//                     ...state.contacts,
//                     filter: action.payload,
//                 }
//             };
//         default:
//             return state;
//     };
// };

// const persistConfig = {
//     key: 'root',
//     storage,
// };

// export const persistedReducer = persistReducer(persistConfig, phonebookReducer);
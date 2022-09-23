import { createAction } from "@reduxjs/toolkit";

export const addNewContact = createAction("contact/addNewContact");
export const deleteContact = createAction("contact/deleteContact");
export const setFilter = createAction("filter/setFilter");

// Код для екшенів на чистому Redux👇

// export const addNewContact = newContact => {
//     return {
//         type: "contact/addNewContact",
//         payload: newContact,
//     };
// };

// export const deleteContact = contactId => {
//     return {
//         type: "contact/deleteContact",
//         payload: contactId,
//     };
// };

// export const setFilter = value => {
//     return {
//         type: "filter/setFilter",
//         payload: value,
//     };
// };
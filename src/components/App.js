import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import shortid from "shortid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle, MainTitle, ContactsTitle, WarningMessage } from './GlobalStyles';
import { Box } from 'components/Box';
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

export const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const addNewContact = (name, number) => {
    const checkContact = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    return checkContact
      ? toast.warn(`${name} is already in contacts`, { theme: "colored", })
      : setContacts(prevState => [newContact, ...prevState]);
  };
  const doFiltering = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <Box as="section"
      mx="auto"
      my="200px"
      width="340px"
      p={5}
      bg="maybeYellow"
      border="normal"
      borderRadius="sm"
      borderColor="almostDarkGreen"
      boxShadow="shadow"
    >
      <Box as="div" mb={5}>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addNewContact={addNewContact} />
      </Box>
      <Box as="div">
        <ContactsTitle>Contacts</ContactsTitle>
        {contacts.length !== 0
          ?
          <>
            <Filter filter={filter} initialiseFilter={setFilter} />
            <ContactList visibleContacts={doFiltering()} deleteContact={setContacts} />
          </>
          :
          <WarningMessage>Looks like you don`t have any contacts yet or just clear them all. Please add new contact.</WarningMessage>}
      </Box>
      <GlobalStyle />
      <ToastContainer autoClose={3000}/>
    </Box>
  );
};

/* <div
  style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101'
  }}
>
  React homework template
</div> */
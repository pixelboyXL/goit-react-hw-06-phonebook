import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle, MainTitle, ContactsTitle, WarningMessage } from './GlobalStyles';
import { Box } from 'components/Box';
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Box as="main"
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
      <Box as="section" mb={5}>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
      </Box>
      <Box as="section">
        <ContactsTitle>Contacts</ContactsTitle>
        {contacts.length !== 0
          ? <>
            <Filter />
            <ContactList />
          </>
          : <WarningMessage>Looks like you don`t have any contacts yet or just clear them all. Please add new contact.</WarningMessage>}
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
import PropTypes from 'prop-types';
import { ButtonForDelete } from "components/ContactList/ContactList.styled";

export const ContactItemEntrails = ({ id, name, number, deleteContact }) => {
    return (
        <>
            <p>{name}: {number}</p>
            <ButtonForDelete type="button" onClick={() => deleteContact(prevState => prevState.filter(contact => contact.id !== id))}>Delete</ButtonForDelete>
        </>
    );
};

ContactItemEntrails.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};
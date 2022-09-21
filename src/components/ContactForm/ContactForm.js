import React, { useState } from "react";
import PropTypes from 'prop-types';
import { ContactFormStyle, LabelForm, InputForm, ButtonForAdd } from "components/ContactForm/ContactForm.styled";
import { useDispatch } from "react-redux";
import { addNewContact } from "redux/actions";

export const ContactForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const onSubmitForm = (event) => {
        event.preventDefault();
        dispatch(addNewContact({ name, number }));
        reset();
    };
    const reset = () => {
        setName('');
        setNumber('');
    };
    
    return (
        <ContactFormStyle onSubmit={onSubmitForm}>
            <LabelForm>Name
                <InputForm
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
            </LabelForm>
            <LabelForm>Number
                <InputForm
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={(event) => setNumber(event.target.value)}
                />
            </LabelForm>
            <ButtonForAdd type="submit">Add contact</ButtonForAdd>
        </ContactFormStyle>
    );
};

ContactForm.propTypes = {
    addNewContact: PropTypes.func.isRequired,
};
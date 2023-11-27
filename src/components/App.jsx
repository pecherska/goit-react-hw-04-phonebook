import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactFormFormik } from './ContactForm/ContactFormFormik';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { ContainerForm, Title } from './App.styled.js';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const { name, number } = data;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.warn(`${name} is already in contacts!`);
      return;
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    setContacts(prevState => {
      return [...prevState, newContact];
    });
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  const onChange = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <ToastContainer />
      <ContainerForm>
        <Title>Phonebook</Title>

        <ContactFormFormik onSubmit={addContact}></ContactFormFormik>

        <h2>Contacts</h2>
        <Filter onChange={onChange} />

        <ContactList
          contacts={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
      </ContainerForm>
    </>
  );
};

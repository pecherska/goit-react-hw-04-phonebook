import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
// import { ContactForm } from './ContactForm/ContactForm';
import { ContactFormFormik } from './ContactForm/ContactFormFormik';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { ContainerForm, Title } from './App.styled.js';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // componentDidUpdate(prevState) {
  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }

  const addContact = data => {
    const { name, number } = data;
    console.log(data);
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts!`);
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
    console.log(e.currentTarget.value);
    setFilter([e.currentTarget.value]);
  };

  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ContainerForm>
        <Title>Phonebook</Title>

        <ContactFormFormik onSubmit={addContact}></ContactFormFormik>

        <h2>Contacts</h2>
        <Filter onChange={onChange} />
        {!!getFilteredContacts.length && (
          <ContactList
            contacts={getFilteredContacts}
            onDeleteContact={deleteContact}
          />
        )}
      </ContainerForm>
    </>
  );
};

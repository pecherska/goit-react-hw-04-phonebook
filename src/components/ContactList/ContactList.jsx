import { ContactListElements, DeleteContactBtn } from './ContactList.styled';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <ContactListElements key={id}>
            <p>{name}</p>:<p>{number}</p>
            <DeleteContactBtn type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </DeleteContactBtn>
          </ContactListElements>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

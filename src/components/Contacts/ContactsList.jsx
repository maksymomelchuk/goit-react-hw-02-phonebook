import PropTypes from 'prop-types';
import ContactsListElement from './ContactsListElement';
import { StyledContactsList } from './Contacts.styled';

export default function ContactsList({ contactsList, onDelete }) {
  return (
    <StyledContactsList>
      {contactsList.map(({ id, name, number }) => {
        return (
          <ContactsListElement
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        );
      })}
    </StyledContactsList>
  );
}

ContactsList.propTypes = {
  contactsList: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

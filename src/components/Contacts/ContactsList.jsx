import PropTypes from 'prop-types';
import ContactsListElement from './ContactsListElement';
import { StyledContactsList } from './Contacts.styled';

export default function ContactsList({ contactsList, onDelete }) {
  return (
    <StyledContactsList>
      <ContactsListElement data={contactsList} onDelete={onDelete} />
    </StyledContactsList>
  );
}

ContactsList.propTypes = {
  contactsList: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

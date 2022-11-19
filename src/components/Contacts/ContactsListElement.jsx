import PropTypes from 'prop-types';
import { StyledContactsElement, StyledDeleteButton } from './Contacts.styled';

export default function ContactsListElement({ id, name, number, onDelete }) {
  return (
    <StyledContactsElement>
      <span>
        {name}: {number}
      </span>
      <StyledDeleteButton onClick={onDelete} type="button" id={id}>
        Delete
      </StyledDeleteButton>
    </StyledContactsElement>
  );
}

ContactsListElement.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

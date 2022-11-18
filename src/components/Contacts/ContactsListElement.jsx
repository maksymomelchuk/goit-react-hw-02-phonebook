import PropTypes from 'prop-types';
import { StyledContactsElement, StyledDeleteButton } from './Contacts.styled';

export default function ContactsListElement({ data, onDelete }) {
  return data.map(({ id, name, number }) => {
    return (
      <StyledContactsElement key={id}>
        <span>
          {name}: {number}
        </span>
        <StyledDeleteButton onClick={onDelete} type="button" id={id}>
          Delete
        </StyledDeleteButton>
      </StyledContactsElement>
    );
  });
}

ContactsListElement.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

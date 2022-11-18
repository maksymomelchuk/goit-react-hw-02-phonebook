import { StyledLabel, StyledInput } from './Filter.styled';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <StyledLabel>
      <p>Find contacts by name</p>
      <StyledInput onChange={onChange} value={value} type="text"></StyledInput>
    </StyledLabel>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

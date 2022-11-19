import styled from '@emotion/styled';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
`;

const StyledInput = styled.input`
  background: #e2e2e2;
  margin-left: 10px;
  padding: 5px;
  outline: none;
  border: 1px solid #d3d3d3;
  border-radius: 3px;
`;

const StyledButton = styled.button`
  background: #e2e2e2;
  outline: none;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 10px 25px;
  color: black;
  cursor: pointer;
  transition: all linear 250ms;

  &:hover {
    background-size: cover;
    transform: scale(1.1);
  }
`;

export { StyledForm, StyledLabel, StyledInput, StyledButton };

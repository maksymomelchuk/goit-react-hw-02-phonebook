import styled from '@emotion/styled';

const StyledContactsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledContactsElement = styled.li`
  width: 300px;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px 40px;

  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  transition: transform linear 250ms;

  background: linear-gradient(10deg, #ccc, #fff 50%);

  box-shadow: 0rem 1.25rem 2.625rem 0.375rem rgba(0, 0, 0, 0.18);
  border-radius: 0.5rem;

  animation-name: cardDrop;
  animation-iteration-count: 1;
  animation-timing-function: all;
  animation-duration: 1s;
  @keyframes cardDrop {
    0% {
      transform: translateY(-100px);
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledDeleteButton = styled.button`
  background: inherit;
  outline: none;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px 15px;
  color: inherit;
  cursor: pointer;
  transition: all linear 250ms;

  &:hover {
    background: linear-gradient(45deg, #3b3b7a, #91617e);
    color: #d3d3d3;
    background-size: cover;
  }
`;

export { StyledContactsList, StyledContactsElement, StyledDeleteButton };

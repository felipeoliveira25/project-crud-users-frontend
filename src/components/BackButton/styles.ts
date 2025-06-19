import styled from 'styled-components';

export const BackButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color:#141516;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 9rem;
  left: 3rem;

    @media (max-width: 650px) {
      top: 7rem;
  }

  &:hover {
    text-decoration: underline;
  }

  svg {
    flex-shrink: 0;
  }
`;
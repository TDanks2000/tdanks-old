import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Text = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  font-weight: 500;

  letter-spacing: 1px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;

  & a {
    color: white;
    text-decoration: none;

    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
  & svg {
    font-size: 2.35rem;
    color: ${({ theme }) => theme.text.offWhite};
  }
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

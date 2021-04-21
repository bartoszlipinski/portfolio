import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  max-width: ${({ desktop }) => (desktop ? 'calc(100% - 17px)' : '100%')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: ${({ theme }) => theme.background};
  left: 0;
  z-index: 2;
`;

export const Text = styled.div`
  margin: 0 20px;
  font-size: 20px;
  user-select: none;
  cursor: pointer;
  font-variant: small-caps;
  &:hover {
    text-decoration: underline #1da1f2;
  }
`;

export const MobileMenu = styled.div`
  width: 250px;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  border-left: 1px solid #2f3336;
  border-bottom: 1px solid #2f3336;
  position: fixed;
  top: 0;
  right: 0;
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid #2f3336;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px 0;

  ${Text} {
    font-size: 24px;
  }

  &:last-of-type {
    padding-left: 20px;
  }
`;

export const Background = styled.div`
  background: #000000;
  opacity: 0.2;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Span = styled.span`
  z-index: 1;
`;

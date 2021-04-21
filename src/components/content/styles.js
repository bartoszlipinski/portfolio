import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div`
  margin: 110px auto;
  padding-top: 65px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  width: 800px;

  @media (max-width: 749px) {
    flex-direction: column;
    max-width: 80%;
    &:first-of-type {
      margin-top: 0px;
      padding-top: 0px;
    }
    margin-top: 50px;
  }
`;

export const Hello = styled.p`
  font-size: 50px;
  margin-bottom: 0;
`;

export const Text = styled.p`
  font-size: 20px;
  ${({ error }) => (error ? 'color: #FF0033;' : '')}
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;

  ${({ center }) => center && `margin: 0 auto;`}

  @media (max-width: 749px) {
    text-align: center;
  }
`;

export const Group = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 749px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 300px;
  margin-right: 50px;
  @media (max-width: 749px) {
    margin: 0;
    align-self: center;
  }
`;

export const List = styled.div`
  display: grid;
  margin-top: 55px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 60px;

  @media (max-width: 749px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Tile = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Text} {
    font-size: 16px;
    margin-top: 10px;
    user-select: none;
  }
`;

export const Tech = styled.p`
  color: #1da1f2;
  font-weight: bold;
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.text};
`;

export const Button = styled.button`
  margin: 0 20px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 2px solid #1da1f2;
  padding: 5px 10px;
  border-radius: 9999px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.hover};
  }

  ${({ bigger }) => bigger && 'width:150px;'}
  ${({ disabled }) => disabled && 'opacity: 0.5; cursor: default;'}
`;

export const Project = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  ${Title} {
    font-weight: normal;
  }
  ${Text} {
    font-size: 16px;
    margin-top: 10px;
  }

  ${Image} {
    ${({ direction }) => (direction === 'row' ? 'margin-left: 50px;' : 'margin-right:50px;')}
    width:200px;
    height: 200px;

    @media (max-width: 749px) {
      margin: 0;
    }
  }

  @media (max-width: 749px) {
    flex-direction: column-reverse;
    padding-top: 50px;
    align-items: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  @media (max-width: 749px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  margin: 20px 0 10px 0;
`;

export const Input = styled.input`
  width: 400px;
  border: 2px solid #1da1f2;
  border-radius: 10px;
  padding: 5px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  &:hover {
    background: ${({ theme }) => theme.hover};
  }

  @media (max-width: 749px) {
    width: 90%;
    max-width: 400px;
  }
`;

export const TextArea = styled.textarea`
  width: 400px;
  max-width: 400px;
  border: 2px solid #1da1f2;
  border-radius: 10px;
  padding: 5px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  &:hover {
    background: ${({ theme }) => theme.hover};
  }
  margin-bottom: 20px;
  min-height: 108px;
  height: auto;

  @media (max-width: 749px) {
    width: 90%;
  }
`;

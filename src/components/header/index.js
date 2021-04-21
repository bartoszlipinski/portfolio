import Switch from 'react-switch';
import { Close, Menu, Moon, Sun } from '../icons';
import { Container, Text, MobileMenu, Wrapper, Background } from './styles';
import { navLinks } from '../../fixtures/nav-links';

export default function Header({ device, toggleMobile, setToggleMobile, theme, toggleTheme }) {
  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container desktop={device === 'pc'}>
      {device === 'pc' ? (
        <>
          {navLinks.map((link) => (
            <Text key={link.id} onClick={() => handleClick(link.id)}>
              {link.text}
            </Text>
          ))}
        </>
      ) : toggleMobile ? (
        <>
          <Background onClick={() => setToggleMobile(false)} />
          <MobileMenu>
            <Wrapper>
              <Close setToggleMobile={setToggleMobile} />
            </Wrapper>
            {navLinks.map((link) => (
              <Wrapper key={link.id}>
                <Text onClick={() => handleClick(link.id)}>{link.text}</Text>
              </Wrapper>
            ))}
            <Wrapper>
              <Switch
                onChange={toggleTheme}
                checked={theme === 'dark'}
                uncheckedIcon={<Sun />}
                checkedIcon={<Moon />}
                onColor="#1DA1F2"
              />
            </Wrapper>
          </MobileMenu>
        </>
      ) : (
        <Menu setToggleMobile={setToggleMobile} />
      )}
    </Container>
  );
}

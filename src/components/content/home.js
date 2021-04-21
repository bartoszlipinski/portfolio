import Switch from 'react-switch';
import { Span } from '../header/styles';
import { Code, Moon, Sun } from '../icons';
import { Group, Hello, Section, Text } from './styles';

export default function Home({ theme, toggleTheme, device }) {
  return (
    <Section id="home">
      <Group>
        <Hello>Hello there!</Hello>
        <Text>I am a web developer with passion.</Text>
        {device === 'pc' ? (
          <Span style={{ zIndex: 1 }}>
            <Switch
              onChange={toggleTheme}
              checked={theme === 'dark'}
              uncheckedIcon={<Sun />}
              checkedIcon={<Moon />}
              onColor="#1DA1F2"
            />
          </Span>
        ) : null}
      </Group>
      <Group>
        <Code />
      </Group>
    </Section>
  );
}

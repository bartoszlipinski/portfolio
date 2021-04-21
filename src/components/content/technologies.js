import { technologies } from '../../fixtures/technologies';
import { techIcons } from '../icons';
import { Group, List, Section, Text, Tile, Title } from './styles';

export default function Technologies() {
  return (
    <Section id="technologies">
      <Group>
        <Title center>Technologies</Title>
        <List>
          {technologies.map((icon) => (
            <Tile key={icon.name}>
              {techIcons[icon.iconId]}
              <Text>{icon.name}</Text>
            </Tile>
          ))}
        </List>
      </Group>
    </Section>
  );
}

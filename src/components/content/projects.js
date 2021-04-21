import {
  Section,
  Title,
  Group,
  Project,
  Text,
  Tech,
  Image,
  Link,
  LinkGroup,
  Button
} from './styles';
import { projects } from '../../fixtures/projects';
import { Github } from '../icons';

export default function Projects() {
  return (
    <Section id="projects">
      <Group>
        <Title center>Projects</Title>
        {projects.map((proj) => (
          <Project key={proj.title} direction={proj.direction}>
            <Group>
              <Title>{proj.title}</Title>
              <Text>{proj.description}</Text>
              <Tech>{proj.tech}</Tech>
              <LinkGroup direction={proj.direction}>
                <Link href={proj.github} target="_blank">
                  <Github />
                </Link>
                <Link href={proj.live} target="_blank">
                  <Button>Live Demo</Button>
                </Link>
              </LinkGroup>
            </Group>
            <Image src={proj.imgUrl} alt={proj.title} draggable={false} />
          </Project>
        ))}
      </Group>
    </Section>
  );
}

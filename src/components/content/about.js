import { Group, Image, Section, Text, Title } from './styles';

export default function About() {
  return (
    <Section id="about">
      <Image src="/user.png" alt="user" draggable={false} />
      <Group>
        <Title>About me</Title>
        <Text>
          My name is Bartek, I am 19 years old and I live in Poland. I started coding when I was 18
          and I fell in love with React. Besides coding I enjoy watching movies and tv shows in free
          time. I do my best to develop my skills and learn new tools.
        </Text>
      </Group>
    </Section>
  );
}

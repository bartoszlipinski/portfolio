import { useForm, ValidationError } from '@formspree/react';
import { Section, Title, Group, Form, Label, Input, TextArea, Button, Text } from './styles';

export default function Contact() {
  const [state, handleSubmit] = useForm(`${process.env.REACT_APP_VERCEL_FORM}`);

  if (state.succeeded) {
    return <Text>Thanks for contacting me!</Text>;
  }

  return (
    <Section id="contact">
      <Group>
        <Title center>Contact Me</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">E-mail Address</Label>
          <Input id="email" type="email" name="email" placeholder="E-mail address..." />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" placeholder="Message..." />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <div
            className="g-recaptcha"
            style={{ marginBottom: '20px' }}
            data-sitekey={process.env.REACT_APP_VERCEL_CAPTCHA}
          ></div>
          <Button type="submit" disabled={state.submitting} bigger>
            Submit
          </Button>
        </Form>
      </Group>
    </Section>
  );
}

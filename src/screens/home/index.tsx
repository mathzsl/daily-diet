import { Typography } from "@components/Typography";
import { Container } from "./styles";
import { Header } from "@components/Header";

export function Home() {
  return (
    <Container>
      <Header />
      <Typography title="Alguma coisa" size="text_3xl" />
      <Typography title="Alguma coisa" />
      <Typography title="Alguma coisa" />
    </Container>
  );
}

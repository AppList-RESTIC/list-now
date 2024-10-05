import { Link } from "expo-router";
import { Container, Title1 } from "./styled";

export default function Tasks() {
  return (
    <Container>
      <Title1>Tarefa</Title1>

      <Link href={'/'}>Home</Link>
    </Container>
  );
}



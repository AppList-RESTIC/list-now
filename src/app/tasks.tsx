import { Link } from "expo-router";
import { Container, Title1 } from "./styled";
import React from "react";

export default function Tasks() {
  return (
    <Container>
      <Title1>Tarefas</Title1>

      <Link href={'/'}>Home</Link>
    </Container>
  );
}



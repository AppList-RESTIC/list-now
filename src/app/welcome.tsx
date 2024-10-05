import { Link } from "expo-router";
import { Container, Title1 } from "./styled";
import React from "react";

export default function Welcome() {
  return (
    <Container>
      <Title1>Seja Bem vindo</Title1>

      <Link href={'/'}>Home</Link>
    </Container>
  );
}



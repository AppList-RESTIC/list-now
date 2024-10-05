import { Container, Title1 } from "./styled";
import React from "react";
import { useGlobalSearchParams } from "expo-router";

export default function Welcome() {
  const { userName } = useGlobalSearchParams(); // Pega o nome de usuário dos parâmetros globais

  return (
    <Container>
      <Title1>Seja Bem-vindo <br /> {userName || "Visitante"}</Title1> {/* Exibe o nome ou "Visitante" */}
    </Container>
  );
}

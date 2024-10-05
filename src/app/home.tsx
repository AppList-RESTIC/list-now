import { Container, Title1 } from "./styled";
import CustomButton from "../components/button";
import React from "react";

export default function Home() {
  return (
    <Container>
      <Title1>Informe seus Dados</Title1>

      <CustomButton
        onPress={() => {
          console.log("Validacao de Inputs");
        }}
        showIcon={true}
      >
        Entrar
      </CustomButton>
    </Container>
  );
}


import { Container, Title1 } from "./styled";
import CustomButton from "../components/button";
import React from "react";

export default function CreateTask() {
  return (
    <Container>
      <Title1>Criar Tarefa</Title1>

      <CustomButton
        onPress={() => {
          console.log("Validacao de Inputs createdTask");
        }}
        showIcon={false}
      >
        Adicionar
      </CustomButton>
    </Container>
  );
}

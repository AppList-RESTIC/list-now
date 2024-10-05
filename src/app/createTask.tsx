import { Link } from "expo-router";
import { Container, Title1 } from "./styled";
import CustomButton from "../components/button";

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

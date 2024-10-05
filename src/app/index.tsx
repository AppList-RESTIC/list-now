import { Link, router } from "expo-router";
import { Container, Title1 } from "./styled";
import CustomButton from "../components/button";

export default function Index() {
  const handlePress = () => {
    router.push("/home"); //Redireciona para a page Home
  };
  return (
    <Container>
      <Title1>ListNow</Title1>

      <Link href={"/createTask"}>Criar Tarefa</Link>
      <Link href={"/tasks"}>Tarefa</Link>
      <Link href={"/about"}>About</Link>

      <CustomButton onPress={handlePress} showIcon={false}>
        Começe Aqui
      </CustomButton>
    </Container>
  );
}

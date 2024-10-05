import { Link, router } from "expo-router";
import { Container, Title1, Logo,Title, SetaContainer } from "./styled";
import CustomButton from "../components/button";
import React from "react";
import { Image } from "react-native";

export default function Index() {
  const handlePress = () => {
    router.push("/home"); //Redireciona para a page Home
  };
  return (
    <Container>
      <Title1>ListNow</Title1>
      
      <Logo source={require("../../assets/images/Logo.png")} />

      <Title>
        Organize sua vida com facilidade e eficiência, tudo na palma da sua mão.
      </Title>

      <SetaContainer>
        <Image source={require("../../assets/images/seta.png")} style={{ width: 80, height: 70 }} />
      </SetaContainer>

      {/* <Link href={"/createTask"}>Criar Tarefa</Link>
      <Link href={"/tasks"}>Tarefa</Link>
      <Link href={"/about"}>About</Link> */}

      <CustomButton onPress={handlePress} showIcon={false}>
        Começe Aqui
      </CustomButton>
    </Container>
  );
}

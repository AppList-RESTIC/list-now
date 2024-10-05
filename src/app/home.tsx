import React from "react";
import { Container, Title1, InputCampo, InputContainer, IconContainer, PularText } from "./styled";
import CustomButton from "../components/button";
import { TextInput, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Formik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

// Define o tipo para os valores do formulário
type FormValues = {
  name: string;
  email: string;
};

// Define o esquema de validação com Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
});

export default function Home() {
  const router = useRouter();

  const handleFormSubmit = async (values: FormValues) => {
    // Salvar os dados localmente
    await AsyncStorage.setItem("userData", JSON.stringify(values));
    // Navegar para a tela Welcome com os dados do usuário
    router.push(`/welcome?userName=${values.name}`); // Passa o nome para a tela Welcome
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem("userData", JSON.stringify({ name: "", email: "" }));
    router.push("/welcome"); // Navega para a tela Welcome com nome vazio
  };

  return (
    <Container>
      <Title1>Informe seus dados</Title1>

      <Formik<FormValues>
        initialValues={{ name: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <InputContainer>
            <InputCampo>
              <TextInput
                placeholder="Digite seu nome e sobrenome"
                placeholderTextColor="#8E8E8E"
                style={{ flex: 1, color: "#fff" }}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <IconContainer>
                <Ionicons name="person-outline" size={20} color="#8E8E8E" />
              </IconContainer>
            </InputCampo>
            {errors.name && <Text style={{ color: "red" }}>{errors.name}</Text>}

            <InputCampo>
              <TextInput
                placeholder="Digite seu e-mail"
                placeholderTextColor="#8E8E8E"
                style={{ flex: 1, color: "#fff" }}
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <IconContainer>
                <Ionicons name="mail-outline" size={20} color="#8E8E8E" />
              </IconContainer>
            </InputCampo>
            {errors.email && <Text style={{ color: "red" }}>{errors.email}</Text>}

            <CustomButton onPress={handleSubmit} showIcon={true}>
              Entrar
            </CustomButton>

            <PularText onPress={handleSkip}>Pular</PularText>
          </InputContainer>
        )}
      </Formik>
    </Container>
  );
}

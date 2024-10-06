import {
  InputProcura,
  InputCampoProcura,
  BaseTarefas,
  CaixaTask,
  TarefasAbertas,
  TarefasNumber,
  BaseEmoji,
  DivFooter,
  BemVindoCotainer,
  BemVindoTxt,
  CircularButton // Certifique-se de importar o botão circular
} from "./styled";
import React from "react";
import { useGlobalSearchParams, useRouter } from "expo-router";
import { TextInput, TouchableOpacity } from "react-native";
import { Search, Pencil, Check, Globe } from "lucide-react-native"; // Ícones importados
import { AntDesign } from "@expo/vector-icons";

export default function Welcome() {
  const { userName } = useGlobalSearchParams();
  const router = useRouter();

  const handleNavigateToAbout = () => {
    router.push("/about"); // Navegar para a tela "About"
  };

  const handleNavigateToAddTask = ()  => {
    router.push("/createTask"); // Navegar para a página AddTask
  };

  return (
    <BemVindoCotainer>
      <BemVindoTxt>
        Seja Bem-vindo <br /> {userName || "Visitante"}
        <TouchableOpacity onPress={handleNavigateToAbout}>
          <AntDesign name="questioncircleo" size={24} color="white" />
        </TouchableOpacity>
      </BemVindoTxt>

      {/* Campo de pesquisa */}
      <InputProcura>
        <InputCampoProcura>
          <TextInput
            placeholder="Pesquise Tarefa"
            placeholderTextColor="#4a4a4a"
            style={{ flex: 1, color: "#000000" }}
          />
          <Search fill="#fff" color="#000" size={24} />
        </InputCampoProcura>
      </InputProcura>

      {/* Base de tarefas */}
      <BaseTarefas>
        <CaixaTask>
          <TarefasAbertas>Tarefas em Aberto:</TarefasAbertas>
          <TarefasNumber>0</TarefasNumber>
          <BaseEmoji>
            <Pencil fill="#fff" color="#000" size={24} />
          </BaseEmoji>
        </CaixaTask>

        <CaixaTask>
          <TarefasAbertas>Tarefas finalizadas:</TarefasAbertas>
          <TarefasNumber>0</TarefasNumber>
          <BaseEmoji>
            <Check fill="#fff" color="#000" size={24} />
          </BaseEmoji>
        </CaixaTask>

        <CaixaTask>
          <TarefasAbertas>Tarefas totais:</TarefasAbertas>
          <TarefasNumber>0</TarefasNumber>
          <BaseEmoji>
            <Globe fill="#fff" color="#000" size={24} />
          </BaseEmoji>
        </CaixaTask>
      </BaseTarefas>

      {/* DivFooter com o botão circular */}
      <DivFooter>
        <CircularButton onPress={handleNavigateToAddTask}>
          <AntDesign name="plus" size={30} color="white" />
        </CircularButton>
      </DivFooter>
    </BemVindoCotainer>
  );
}


// import { Container, Title1 } from "./styled";
// import React from "react";
// import { useGlobalSearchParams } from "expo-router";

// export default function Welcome() {
//   const { userName } = useGlobalSearchParams(); // Pega o nome de usuário dos parâmetros globais

//   return (
//     <Container>
//       <Title1>Seja Bem-vindo <br /> {userName || "Visitante"}</Title1> {/* Exibe o nome ou "Visitante" */}
//     </Container>
//   );
// }

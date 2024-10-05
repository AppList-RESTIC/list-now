import {
  ActionsFooter,
  ButtonAlert,
  CardParagraph,
  Container,
  ContainerParagraph,
  DivFooter,
  InputAlert,
  ModalAlert,
  ModalTitleAlert,
  Paragraph,
  SectionImg,
  SectionTitle,
  TextButtonAlert,
  Title1,
  Title3,
  TitleAlert,
  TitleFooter,
  TitleParagraph,
} from "./styled";

import {
  CircleHelp,
  MessageSquareMore,
  MessagesSquare,
  TriangleAlert,
  X,
} from "lucide-react-native";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

export default function About() {
  const [isModalAlert, setIsModalAlert] = useState<boolean>(false);
  // function openModalAlert(): void {
  //   setIsModalAlert(true)
  // }

  // function closeModalAlert(): void {
  //   setIsModalAlert(true)
  // }

  return (
    <Container>
      <SectionTitle>
        {/* <DivIcon>
          <Link href={"/"}>
            <MoveLeft color={"#fff"} size={38} />
          </Link>
        </DivIcon> */}
        <Title1>
          Como podemos <br />
          ajudar?
        </Title1>
      </SectionTitle>
      <SectionImg>
        <CircleHelp color={"#fff"} size={128} />
      </SectionImg>

      <DivFooter>
        <TitleFooter>
          <MessagesSquare color={"#292929"} size={38} />
          <Title3>Dúvidas Frequêntes</Title3>
        </TitleFooter>

        <ContainerParagraph>
          <CardParagraph>
            <TitleParagraph>Como adicionar uma nova tarefa?</TitleParagraph>
            <Paragraph>
              Para adicionar uma nova tarefa, vá até a tela inicial e toque no
              botão "+" localizado no canto inferior direito da tela. Preencha
              as informações da tarefa e toque em "Adicionar".
            </Paragraph>
          </CardParagraph>

          <CardParagraph>
            <TitleParagraph>Como editar uma tarefa existente?</TitleParagraph>
            <Paragraph>
              Para editar uma tarefa, encontre a tarefa na lista e toque no
              ícone de lápis ao lado da tarefa que deseja editar. Faça as
              alterações necessárias e salve.
            </Paragraph>
          </CardParagraph>

          <CardParagraph>
            <TitleParagraph>Como excluir uma tarefa?</TitleParagraph>
            <Paragraph>
              Para excluir uma tarefa, toque no ícone de lixeira ao lado da
              tarefa que deseja remover. Confirme a exclusão quando solicitado.
            </Paragraph>
          </CardParagraph>
        </ContainerParagraph>
        <ActionsFooter>
          <MessageSquareMore color={"#292929"} size={40} />
          <TouchableOpacity
            onPress={() => {
              setIsModalAlert(true);
            }}
          >
            <TriangleAlert fill="#f44336" color={"#ECECEC"} size={44} />
          </TouchableOpacity>
        </ActionsFooter>
      </DivFooter>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalAlert}
        onRequestClose={() => setIsModalAlert(false)} // Fechar modal ao pressionar o botão de voltar
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ModalAlert>
            <ModalTitleAlert>
              <TitleAlert>Algo para relatar?</TitleAlert>
              <TouchableOpacity onPress={() => setIsModalAlert(false)}>
                <X color="#ececec" size={28} />
              </TouchableOpacity>
            </ModalTitleAlert>

            <InputAlert
              placeholder="Digite seu alerta"
              placeholderTextColor="#A5A5A5"
            ></InputAlert>

            <ButtonAlert
              onPress={() => {
                console.log("Button Alert Press");
              }}
            >
              <TextButtonAlert>Enviar</TextButtonAlert>
            </ButtonAlert>
          </ModalAlert>
        </View>
      </Modal>
    </Container>
  );
}

import { Link } from "expo-router";
import {
  ActionsFooter,
  CardParagraph,
  Container,
  ContainerParagraph,
  DivFooter,
  Paragraph,
  SectionImg,
  SectionTitle,
  Title1,
  Title3,
  TitleFooter,
  TitleParagraph,
} from "./styled";

import {
  CircleHelp,
  MessageSquareMore,
  MessagesSquare,
  TriangleAlert,
} from "lucide-react-native";

export default function Index() {
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
          <TriangleAlert fill="#f44336" color={"#ECECEC"} size={44} />
        </ActionsFooter>
      </DivFooter>
    </Container>
  );
}

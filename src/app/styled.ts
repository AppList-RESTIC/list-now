import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #292929;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: start;
  align-items: center;
  position: relative;
  padding-top: 2em;
  box-sizing: border-box;
`;

export const SectionTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  position: relative;

  padding: 0px 10px;
  width: 100%;
  height: 120px;
`;

export const Title1 = styled.Text`
  font-size: 34px;

  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 500;
  color: #ffffff;
`;

// export const DivIcon = styled.View`
//   padding-top: 8px;
//   margin-right: 2em;
//   position: absolute;
//   left: 8;
// `;

export const SectionImg = styled.View`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivFooter = styled.View`
  position: absolute;
  bottom: 0;
  padding: 14px 24px;
  background-color: #ececec;

  width: 100%;
  border-radius: 30px 30px 0px 0px;
  height: 480;
`;

export const TitleFooter = styled.View`
  width: 100%;
  min-height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 1em;
`;

export const Title3 = styled.Text`
  color: #292929;
  font-weight: bold;
  font-size: 1.4em;
`;

export const ContainerParagraph = styled.Text`
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  width: 100%;

  height: 380px;
  padding: 8px 4px;
`;

export const CardParagraph = styled.Text`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: justify;
`;

export const TitleParagraph = styled.Text`
  color: #292929;
  font-weight: bold;
  font-size: 1.2em;
`;

export const Paragraph = styled.Text`
  color: #292929;
  font-size: 1.2em;
`;

export const ActionsFooter = styled.Text`
  width: 100%;
  height: 60px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// BemVindo
// export const Logo = styled.Image`
//   width: 200px;
//   height: 200px;
//   margin-top: 38px;
//   resize-mode: contain;
// `;

export const Logo = styled.Image`
  width: 12.5rem; /* 200px / 16 = 12.5rem */
  height: 10.5rem; /* 200px / 16 = 12.5rem */
  margin-top: 2.375rem; /* 38px / 16 = 2.375rem */
  resize-mode: contain;
`;

export const SetaContainer = styled.View`
  width: 100%;
  align-items: flex-start;
  padding-left: 0.05rem; /* 20px / 16 = 1.25rem */
`;

export const Title2 = styled.Text`
  font-size: 28px;
  width: 90%;
  margin-top: 46px;
  margin-bottom: 20px;
  color: white;
  text-align: center;
`;
// BemVindo

// Home
export const InputContainer = styled.View`
  width: 100%;
  margin-top: 5.5rem;
  margin-bottom: 8.1875rem;
  align-items: center;
`;

export const InputCampo = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #8e8e8e;
  width: 80%;
  height: 52px;
  margin-bottom: 2.25rem;
  padding: 10px 0;
`;

export const IconContainer = styled.View`
  padding-left: 10px;
`;

export const PularText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`;
// Home

export const ModalAlert = styled.View`
  background-color: rgba(17, 17, 17, 0.95);
  width: 272px;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.2em;
  border-radius: 18px;
  gap: 1.4em;
`;

export const ModalTitleAlert = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 8px;
`;

export const TitleAlert = styled.Text`
  font-size: 1.2em;
  font-weight: 500;
  color: #ececec;
  padding-bottom: 4px;
`;

export const InputAlert = styled.TextInput`
  width: 100%;
  height: 34px;
  border-radius: 6px;
  background-color: #ececec;
  text-indent: 0.5em;
  outline: none;
`;

export const ButtonAlert = styled.TouchableOpacity`
  background-color: #ee4d2d;
  width: 106px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextButtonAlert = styled.Text`
  color: #ececec;
  font-weight: 500;
`;

// Welcome
export const BemVindoCotainer = styled.View`
  background-color: #292929;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: start;
  position: relative;
  padding-top: 2em;
  box-sizing: border-box;
`;

export const BemVindoTxt = styled.View`
  /* margin-left:1em; */
  /* width: 100%; */
  display: flex;
  flex-direction:row;

  margin-left:1em;
  margin-right:1em;
  justify-content: space-between;

  font-weight: 500;
  font-size:21px;
  color: #ffffff;

  /* justify-content: start; */
  /* align-items: start; */
  margin-bottom:1em;
  box-sizing: border-box;
`;

export const InputProcura = styled.View`
  width: 100%;
  align-items: center;
`;

export const InputCampoProcura = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-bottom-color: #fff;
  width: 90%;
  height: 42px;
  border-radius: 5px;
  padding: 3px;
`;

//--
export const BaseTarefas = styled.View`
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
`;

export const CaixaTask = styled.TouchableOpacity`
  width: 100px;
  height: 105px;
  border-radius: 12px;
  background-color: #d6dcd7;
  padding: 2px;
`;

export const TarefasAbertas = styled.Text`
  text-align: left;
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin-top: 2px;
`;

export const TarefasNumber = styled.Text`
  text-align: left;
  color: black;
  font-size: 16px;
`;

export const BaseEmoji = styled.View`
  align-items: center;
  justify-content: center;
`;

export const CircularButton = styled.TouchableOpacity`

  /* bottom: 20px;
  right: 20px; */
  position:fixed;
  margin-top:90%;
  margin-left:75%;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #000;  
  justify-content: center;
  align-items: center;
`;

export const DivFooterTwo = styled.View`
  position: absolute;
  bottom: 0;
  padding: 14px 24px;
  background-color: #ececec;
  border: 1px solid red;
  width: 100%;
  border-radius: 30px 30px 0px 0px;
  height: 300px;
`;

// Welcome

// CreateTask

// 
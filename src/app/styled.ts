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
  border: 1px solid red;
`;

export const SectionTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  position: relative;

  border: 1px solid green;
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
  border: 1px solid gray;
`;

export const DivFooter = styled.View`
  position: absolute;
  bottom: 0;
  padding: 14px 24px;
  background-color: #ececec;
  border: 1px solid red;
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
  width: 12.5rem;  /* 200px / 16 = 12.5rem */
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
  border: 1px solid;
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
  border-bottom-color: #8E8E8E;
  width: 80%;
  height:52px;
  margin-bottom: 2.25rem;
  padding: 10px 0;
`;

export const IconContainer = styled.View`
  padding-left: 10px;
`;

export const PularText = styled.Text`
  font-size: 22px;
  font-weight:bold;
  color: #fff;
  margin-top: 20px;
`;
// Home
import React, { Children } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MoveRight } from "lucide-react-native";

const ButtonContainer = styled(TouchableOpacity)`
  background-color: #ece653;
  padding: 12px;
  width: 285px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
`;

const ButtonText = styled.Text<{ hasIcon: boolean }>`
  color: #292929;
  display: flex;
  padding-bottom: 4px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  margin-right: ${(props: { hasIcon: boolean }) =>
    props.hasIcon ? "1em" : "0"};
`;

interface CustomButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  showIcon?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  children,
  showIcon = false,
}) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText hasIcon={showIcon}>{children}</ButtonText>
      {showIcon && <MoveRight color={"#292929"} size={34} />}
    </ButtonContainer>
  );
};

export default CustomButton;

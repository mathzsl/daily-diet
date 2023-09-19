import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.gray_1};
`;

export const PercentCardButton = styled(TouchableOpacity)`
  margin-top: 32px;
`;

export const NewMealContent = styled.View`
  margin-top: 40px;
  gap: 8px;
`;

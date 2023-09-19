import { View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { ArrowUpRight, ArrowLeft } from "phosphor-react-native";

export type PercentCardStyleProps = "green" | "red";

type styledProps = {
  variant: PercentCardStyleProps;
};

export const Container = styled(View)<styledProps>`
  padding: 16px;
  border-radius: 8px;
  margin-top: 32px;
  position: relative;

  background-color: ${({ theme, variant }) =>
    variant === "green" ? theme.colors.green_light : theme.colors.red_light};

  align-items: center;
  justify-content: center;
`;

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  left: 8px;
`;

export const ArrowUpIcon = styled(ArrowUpRight).attrs<styledProps>(
  ({ theme, variant }) => ({
    color:
      variant === "green" ? theme.colors.green_dark : theme.colors.red_dark,
    size: 24,
  })
)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const ArrowLeftIcon = styled(ArrowLeft).attrs<styledProps>(
  ({ theme, variant }) => ({
    color:
      variant === "green" ? theme.colors.green_dark : theme.colors.red_dark,
    size: 24,
  })
)``;

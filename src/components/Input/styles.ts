import { Typography } from "@components/Typography";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  gap: 4px;
`;

export const Label = styled(Typography).attrs(({}) => ({
  size: "text_sm",
  weight: "bold",
}))``;

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray_6,
}))`
  height: 48px;
  padding: 14px;
  border-radius: 6px;
  margin-bottom: 24px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray_3};
    color: ${theme.colors.gray_7};
  `}
`;

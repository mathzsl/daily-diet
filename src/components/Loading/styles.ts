import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.base.gray_1};

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.base.gray_6,
  size: "large",
}))``;

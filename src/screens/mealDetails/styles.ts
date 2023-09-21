import { Typography } from "@components/Typography";
import styled from "styled-components/native";

export const Content = styled.View`
  flex: 1;
  gap: 24px;
  background-color: transparent;
`;

export const StatusCard = styled.View`
  width: 150px;
  padding: 8px 16px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.gray_2};

  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  gap: 8px;
`;

export const Status = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.green_dark};
`;

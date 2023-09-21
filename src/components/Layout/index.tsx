import { ReactNode } from "react";
import {
  BackButton,
  ButtonIcon,
  Container,
  Content,
  Header,
  HeaderStyleProps,
  HeaderTitle,
} from "./styles";

type LayoutProps = {
  headerTitle: string;
  children: ReactNode;
  variant?: HeaderStyleProps;
};

export function Layout({
  headerTitle,
  children,
  variant = "gray",
}: LayoutProps) {
  return (
    <Container>
      <Header variant={variant}>
        <BackButton>
          <ButtonIcon />
        </BackButton>

        <HeaderTitle title={headerTitle} />
      </Header>

      <Content>{children}</Content>
    </Container>
  );
}

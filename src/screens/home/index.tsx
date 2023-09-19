import { Container, NewMealContent, PercentCardButton } from "./styles";

import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";

import { Plus } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

export function Home() {
  const { colors } = useTheme();

  return (
    <Container>
      <Header />

      <PercentCardButton onPress={() => console.log("navigate to statistics")}>
        <PercentCard
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          variant="green"
        />
      </PercentCardButton>

      <NewMealContent>
        <Typography title="Refeições" />

        <Button
          onPress={() => console.log("Add maeal")}
          title="Nova refeição"
          icon={<Plus size={18} color={colors.white} />}
        />
      </NewMealContent>
    </Container>
  );
}

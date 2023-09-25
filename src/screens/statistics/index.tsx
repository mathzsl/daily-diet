import { PercentCard } from "@components/PercentCard";
import {
  Container,
  Header,
  MainContent,
  Title,
  TotalMealsContent,
} from "./styles";
import { DetailsCard } from "@components/DetailsCard";

import { useNavigation } from "@react-navigation/native";

export function Statistics() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <PercentCard
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          iconPosition="left"
          onPress={() => navigation.navigate("home")}
        />
      </Header>

      <MainContent>
        <Title title="Estatísticas gerais" />

        <DetailsCard
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
        />

        <DetailsCard title="109" subtitle="refeições registradas" />

        <TotalMealsContent>
          <DetailsCard
            variant="green"
            title="99"
            subtitle="refeições dentro da dieta"
            style={{ flex: 1 }}
          />

          <DetailsCard
            variant="red"
            title="10"
            subtitle="refeições fora da dieta"
            style={{ flex: 1 }}
          />
        </TotalMealsContent>
      </MainContent>
    </Container>
  );
}

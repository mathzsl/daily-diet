import { TouchableOpacity } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";

export function Home() {
  return (
    <Container>
      <Header />

      <TouchableOpacity>
        <PercentCard
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          variant="red"
        />
      </TouchableOpacity>
    </Container>
  );
}

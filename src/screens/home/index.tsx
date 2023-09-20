import {
  Container,
  NewMealContent,
  PercentCardButton,
  TitleDate,
} from "./styles";

import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";

import { Plus } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import { DayListItem } from "@components/DayListItem";
import { SectionList } from "react-native";

export function Home() {
  const { colors } = useTheme();

  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ];

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

import { useCallback, useState } from "react";
import { Alert, SectionList } from "react-native";

import {
  Container,
  NewMealContent,
  PercentCardButton,
  DateTitle,
} from "./styles";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";
import { DayListItem } from "@components/DayListItem";

import { Plus } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

import { getlAllMeals } from "@storage/meals/getAllMeals";
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import { filteredMeals } from "@utils/filteredMeals";
import {
  calculateNumberOfMeals,
  calculatePercentage,
} from "@utils/calculateStatistics";

type Meals = {
  date: string;
  data: MealStorageDTO[];
};

export function Home() {
  const [meals, setMeals] = useState<Meals[]>([]);
  const [statistics, setStatistics] = useState<MealStorageDTO[]>([]);

  const percentage = calculatePercentage(statistics);

  const { colors } = useTheme();

  const navigation = useNavigation();

  async function fetchMeals() {
    try {
      const data = await getlAllMeals();

      setStatistics(data);

      const mealsList = filteredMeals(data);

      setMeals(mealsList);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Refeições",
        "Não foi possível carregar a lista de refeições."
      );
    } finally {
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header />

      <PercentCardButton
        onPress={() => {
          navigation.navigate("statistics", { mealList: statistics });
        }}
      >
        <PercentCard
          title={!percentage ? "0%" : `${percentage.toFixed(2)}%`}
          subtitle="das refeições dentro da dieta"
          variant={percentage >= 50 ? "green" : "red"}
        />
      </PercentCardButton>

      <NewMealContent>
        <Typography title="Refeições" />

        <Button
          onPress={() => navigation.navigate("newMeal")}
          title="Nova refeição"
          icon={<Plus size={18} color={colors.white} />}
        />
      </NewMealContent>

      <SectionList
        showsVerticalScrollIndicator={false}
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DayListItem
            title={item.name}
            hours={item.hour}
            isHealthy={item.isOnTheDiet}
            onPress={() => console.log("navegando")}
          />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <DateTitle title={date.replaceAll("/", ".")} />
        )}
        style={{ marginTop: 18 }}
      />
    </Container>
  );
}

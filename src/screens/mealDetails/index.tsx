import { Layout } from "@components/Layout";
import { Content, Status, StatusCard } from "./styles";
import { Typography } from "@components/Typography";
import { View } from "react-native";

export function MealDetails() {
  return (
    <Layout headerTitle="Refeição">
      <Content>
        <View style={{ gap: 8 }}>
          <Typography title="Sanduíche" size="text_2xl" weight="bold" />
          <Typography title="Sanduíche" size="text_lg" color="gray_6" />
        </View>

        <View style={{ gap: 8 }}>
          <Typography title="Data e hora" size="text_sm" weight="bold" />
          <Typography
            title="12/08/2022 às 16:00"
            size="text_md"
            color="gray_6"
          />
        </View>

        <StatusCard>
          <Status />
          <Typography title="dentro da dieta" />
        </StatusCard>
      </Content>
    </Layout>
  );
}

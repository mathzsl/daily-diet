import { View } from "react-native";

import { Content, Status, StatusCard } from "./styles";

import { Layout } from "@components/Layout";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";

import { useTheme } from "styled-components/native";

import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { Modal } from "@components/Modal";

export function MealDetails() {
  const { colors } = useTheme();
  const isVisible = true;

  return (
    <Layout headerTitle="Refeição" variant="red" >
      <Content>
        <View style={{ gap: 8 }}>
          <Typography title="Sanduíche" size="text_2xl" weight="bold" />
          <Typography
            title="Sanduíche de pão integral com atum e salada de alface e tomate"
            size="text_lg"
            color="gray_6"
          />
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

        <Modal visible={false} statusBarTranslucent />

        <View style={{ gap: 8, marginTop: 200 }}>
          <Button
            title="Editar refeição"
            icon={<PencilSimpleLine size={18} color={colors.white} />}
          />

          <Button
            title="Salvar alterações"
            variant="secondary"
            icon={<Trash size={18} color={colors.gray_7} />}
          />
        </View>
      </Content>
    </Layout>
  );
}

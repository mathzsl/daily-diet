import { useState } from "react";
import { Alert } from "react-native";

import {
  Content,
  DateBox,
  Label,
  SelectedBox,
  TextArea,
  TextAreaContainer,
} from "./styles";

import { Layout } from "@components/Layout";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { SelectButton } from "@components/SelectButton";

import uuid from "react-native-uuid";

import { createMeal } from "@storage/meals/createMeal";

import { useNavigation } from "@react-navigation/native";

export function NewMeal() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [isOnTheDiet, setIsOnTheDiet] = useState(true);

  async function handleRegisterNewMeal() {
    try {
      const newMeal = {
        id: String(uuid.v4()),
        name,
        description,
        date,
        hour,
        isOnTheDiet,
      };

      await createMeal(newMeal);
      Alert.alert("Refeição cadastrada com sucesso!");
      navigation.navigate("home");
    } catch (error) {}
  }

  console.log(isOnTheDiet);

  return (
    <Layout
      headerTitle="Nova refeição"
      onPressBackButton={() => navigation.navigate("home")}
    >
      <Content>
        <Input
          title="Nome"
          placeholder="Digite o nome da refeição"
          value={name}
          onChangeText={setName}
        />

        <Label
          title="Descrição"
          value={description}
          onChangeText={setDescription}
        />
        <TextAreaContainer>
          <TextArea />
        </TextAreaContainer>

        <DateBox>
          <Input
            title="Data"
            placeholder="DD/MM/YYYY"
            value={date}
            onChangeText={setDate}
            style={{ flex: 1 }}
          />

          <Input
            title="Hora"
            placeholder="hh:mm"
            value={hour}
            onChangeText={setHour}
            style={{ flex: 1 }}
          />
        </DateBox>

        <Label title="Está dentro da dieta?" />
        <SelectedBox>
          <SelectButton
            title="Sim"
            statusColor="green"
            isSelected={isOnTheDiet}
            onPress={() => setIsOnTheDiet(true)}
          />
          <SelectButton
            title="Não"
            statusColor="red"
            isSelected={!isOnTheDiet}
            onPress={() => setIsOnTheDiet(false)}
          />
        </SelectedBox>

        <Button title="Cadastrar refeição" onPress={handleRegisterNewMeal} />
      </Content>
    </Layout>
  );
}

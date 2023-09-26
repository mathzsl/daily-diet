import { useState } from "react";
import { Alert, View } from "react-native";

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
import { dateMask } from "@components/utils/inputMask";

export function NewMeal() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [isOnTheDiet, setIsOnTheDiet] = useState(true);

  console.log(date);

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

  return (
    <Layout
      headerTitle="Nova refeição"
      onPressBackButton={() => navigation.navigate("home")}
    >
      <Content>
        <Label title="Nome" />
        <Input
          placeholder="Digite o nome da refeição"
          value={name}
          onChangeText={setName}
        />

        <Label title="Descrição" />
        <TextAreaContainer>
          <TextArea value={description} onChangeText={setDescription} />
        </TextAreaContainer>

        <DateBox>
          <View style={{ flex: 1 }}>
            <Label title="Data" />
            <Input
              placeholder="DD/MM/YYYY"
              value={date}
              maxLength={10}
              onChangeText={(date) => setDate(dateMask(date))}
              style={{ flex: 1 }}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Label title="Hora" />
            <Input
              placeholder="hh:mm"
              value={hour}
              onChangeText={setHour}
              style={{ flex: 1 }}
            />
          </View>
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

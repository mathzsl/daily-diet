import { useState } from "react";
import { View } from "react-native";

import {
  Content,
  DateBox,
  Label,
  SelectedBox,
  TextArea,
  TextAreaContainer,
} from "./styles";

import { Input } from "@components/Input";
import { Layout } from "@components/Layout";
import { Button } from "@components/Button";
import { SelectButton } from "@components/SelectButton";
import { useNavigation } from "@react-navigation/native";
import { dateMask, hourMask } from "@utils/inputMask";

export function EditMeal() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [isOnTheDiet, setIsOnTheDiet] = useState(true);

  return (
    <Layout
      headerTitle="Editar refeição"
      onPressBackButton={() => navigation.navigate("mealDetails", { id: "1" })}
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
              keyboardType="numeric"
              onChangeText={(date) => setDate(dateMask(date))}
              style={{ flex: 1 }}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Label title="Hora" />
            <Input
              placeholder="hh:mm"
              value={hour}
              maxLength={5}
              onChangeText={(hour) => setHour(hourMask(hour))}
              style={{ flex: 1 }}
              keyboardType="numeric"
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

        <Button title="Salvar alterações" />
      </Content>
    </Layout>
  );
}

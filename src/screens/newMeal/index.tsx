import { useState } from "react";
import { Layout } from "@components/Layout";
import {
  Content,
  DateBox,
  Label,
  SelectedBox,
  TextArea,
  TextAreaContainer,
} from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { SelectButton } from "@components/SelectButton";

export function NewMeal() {
  const [onTheDiet, setOnTheDiet] = useState<boolean | undefined>();

  return (
    <Layout headerTitle="Nova refeição">
      <Content>
        <Input title="Nome" placeholder="Digite o nome da refeição" />

        <Label title="Descrição" />
        <TextAreaContainer>
          <TextArea />
        </TextAreaContainer>

        <DateBox>
          <Input title="Data" placeholder="DD/MM/YYYY" style={{ flex: 1 }} />

          <Input title="Hora" placeholder="hh:mm" style={{ flex: 1 }} />
        </DateBox>

        <Label title="Está dentro da dieta?" />
        <SelectedBox>
          <SelectButton
            title="Sim"
            statusColor="green"
            isSelected={onTheDiet}
          />
          <SelectButton title="Não" statusColor="red" isSelected={!onTheDiet} />
        </SelectedBox>

        <Button title="Cadastrar refeição" style={{bottom: 0}} />
      </Content>
    </Layout>
  );
}

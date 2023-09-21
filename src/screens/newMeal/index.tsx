import { Layout } from "@components/Layout";
import { Content, DateBox, Label, TextArea, TextAreaContainer } from "./styles";
import { Input } from "@components/Input";

export function NewMeal() {
  return (
    <Layout headerTitle="Nova refeição">
      <Content>
        <Input title="Nome" placeholder="Digite o nome da refeição" />

        <Label title="Descrição" />
        <TextAreaContainer>
          <TextArea />
        </TextAreaContainer>

        <DateBox>
          <Input
            title="Data"
            placeholder="DD/MM/YYYY"
            style={{ flex: 1 }}
          />

          <Input
            title="Hora"
            placeholder="hh:mm"
            style={{ flex: 1 }}
          />
        </DateBox>
      </Content>
    </Layout>
  );
}

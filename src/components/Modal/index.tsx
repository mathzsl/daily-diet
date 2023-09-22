import { Typography } from "@components/Typography";
import { Container, ModalBox, ModalContent } from "./styles";
import { ModalProps, View } from "react-native";
import { Button } from "@components/Button";

type ModalComponentProps = ModalProps;

export function Modal({ ...rest }: ModalComponentProps) {
  return (
    <Container animationType="fade" transparent={true} {...rest}>
      <ModalContent>
        <ModalBox>
          <Typography
            title="Deseja realmente excluir o registro da refeição?"
            color="gray_6"
            size="text_lg"
            weight="bold"
            style={{ textAlign: "center" }}
          />

          <View
            style={{
              marginTop: 32,
              gap: 12,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button title="Cancelar " style={{ flex: 1 }} variant="secondary" />

            <Button title="Sim, excluir" style={{ flex: 1 }} />
          </View>
        </ModalBox>
      </ModalContent>
    </Container>
  );
}

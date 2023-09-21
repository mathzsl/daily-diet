import { TextInputProps } from "react-native";
import { Container, Label, TextInput } from "./styles";

type InputProps = TextInputProps & {
  title: string;
  placeholder?: string;
};

export function Input({ title, placeholder, ...rest }: InputProps) {
  return (
    <Container {...rest}>
      <Label title={title} />
      <TextInput placeholder={placeholder} />
    </Container>
  );
}

import { Title, TypographStyleProps } from "./styles";

type TypographyType = TypographStyleProps & {
  title: string;
};

export function Typography({ title, ...rest }: TypographyType) {
  return <Title {...rest}>{title}</Title>;
}

import { TouchableOpacityProps, View } from "react-native";

import {
  Container,
  MealTitle,
  Status,
  StatusStyleProps,
  HourTitle,
} from "./styles";

type DayListItemProps = TouchableOpacityProps & {
  title: string;
  hours: string;
  isHealthy: StatusStyleProps;
};

export function DayListItem({title, hours, isHealthy }: DayListItemProps) {
  return (
    <Container>
      <HourTitle title={hours} />

      <MealTitle title={title} />
      <Status onTheDiet={isHealthy} />
    </Container>
  );
}

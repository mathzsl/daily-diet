import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";

import { Loading } from "@components/Loading";
import { NewMeal } from "@screens/newMeal";
import { Feedback } from "@screens/feedback";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {!fontsLoaded ? <Loading /> : <Feedback />}
    </ThemeProvider>
  );
}

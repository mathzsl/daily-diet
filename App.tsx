import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";

import { Home } from "@screens/home";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {!fontsLoaded ? (
        <ActivityIndicator color="#000" size="large" />
      ) : (
        <Home />
      )}
    </ThemeProvider>
  );
}

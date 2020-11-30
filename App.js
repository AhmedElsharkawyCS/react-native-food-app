import React from "react";
import { StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import MealsNavigator from "./navigation/MealsNavigation";
import { enableScreens } from "react-native-screens";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};
enableScreens();
export default function App() {
  let [fontsLoaded] = useFonts({
    "open-sans": "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
    "open-sans-bold": "https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap",
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <PaperProvider theme={theme}>
      <MealsNavigator />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

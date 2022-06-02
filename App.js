import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./src/screens/home";

export default function App() {
  const [loaded] = useFonts({
    "Graphic-Regular": require("./assets/fonts/GraphikRegular.otf"),
    "Graphic-Bold": require("./assets/fonts/GraphikBold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

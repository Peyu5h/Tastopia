import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import store from "./rtk/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

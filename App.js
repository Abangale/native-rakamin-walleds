import {
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Form from "./Form";
import Home from "./pages/Home";
import Topup from "./Topup";
import Transfer from "./Transfer";

export default function App() {
  return (
    <SafeAreaView>
      <Transfer></Transfer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

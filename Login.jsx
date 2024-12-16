import { Image, Text, View, SafeAreaView, StyleSheet } from "react-native";
import FormComponent from "./Form";

export default function Login() {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("./assets/wallet.png")}
          style={{ width: 250, height: 60 }}
        />
        <FormComponent state="login"></FormComponent>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#FAFBFD'
  },
  notesInput: {
    height: 200,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 8,
  },
  checkedCheckbox: {
    backgroundColor: "#4CAF50",
  },
});

import { Image, Text, View, SafeAreaView } from "react-native";
import FormComponent from "./Form";

export default function Register() {
  return (
    <SafeAreaView style={{ paddingTop: 30, flex: 1 }}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", marginTop: 150}}>
        <Image
          source={require("./assets/wallet.png")}
          style={{ width: 250, height: 60 }}
        />
        <FormComponent state='register'></FormComponent>
        </View>
    </SafeAreaView>
  );
}

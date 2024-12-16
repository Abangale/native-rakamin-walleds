import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";

export default function Topup() {
  <SafeAreaView
    style={{ flex: 1, paddingTop: Platform.OS === "android" ? 25 : 0 }}
  >
    <StatusBar style="auto" />
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          elevation: 3, // For Android
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          paddingHorizontal: 20,
          display: "flex",
          alignItems: "center",
          height: 80,
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={require("./assets/profile.jpg")}
          style={{ width: 46, height: 46, borderRadius: 100 }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Aldra Kasyfil Aziz</Text>
          <Text>Personal Account</Text>
        </View>
        <View style={{ flex: 1 }}></View>
        <Image
          source={require("./assets/light.png")}
          style={{ width: 42, height: 42 }}
        />
      </View>
    </View>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

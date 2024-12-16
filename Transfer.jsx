import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

export default function Topup() {
  return (
    <SafeAreaView style={{ paddingTop: 30 }}>
      <StatusBar style="auto" />
      <View>
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
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Transfer</Text>
        </View>
        <View
          style={{ padding: 20, backgroundColor: "#19918f", marginBottom: 20 }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>To: 9000008940208</Text>
        </View>
        <View
          style={{ padding: 20, backgroundColor: "#FAFBFD", marginBottom: 20 }}
        >
          <Text style={{ color: "#999", fontSize: 16 }}>Amount</Text>
          <View style={{ marginTop: 16, flexDirection: "row" }}>
            <Text style={{ width: 30, fontSize: 16 }}>IDR</Text>
            <Text
              style={{
                marginStart: 6,
                borderBottomWidth: 1,
                width: 320,
                borderBottomColor: "#999",
                fontSize: 40,
              }}
            >
              100.000
            </Text>
          </View>
        </View>
        <View
          style={{ padding: 20, backgroundColor: "#FAFBFD", marginBottom: 20 }}
        >
          <Text style={{ color: "#999", fontSize: 16 }}>Notes</Text>
          <Text
            style={{
              marginStart: 6,
              borderBottomWidth: 1,
              width: 320,
              borderBottomColor: "#999",
              fontSize: 40,
            }}
          ></Text>
        </View>
        <View style={{ padding: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#19918f",
              paddingVertical: 16,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Transfer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

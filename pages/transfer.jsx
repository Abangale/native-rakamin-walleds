import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { transactionsPosts } from "../api/restApi";

export default function Transfer() {
  const [transactionData, setTransactionData] = useState({
    type: "d",
    from_to: "",
    amount: null,
    description: "",
  });

  const handleChange = (name, value) => {
    setTransactionData({
      ...transactionData,
      [name]: name === "amount" ? parseInt(value) || 0 : value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await transactionsPosts({
        ...transactionData,
      });
      console.log(response); // Debugging purpose
      Alert.alert("Success", "Transfer successfully!");
      setTransactionData({
        type: "d",
        from_to: "",
        amount: null,
        description: "",
      });
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    }
  };

  const navigation = useNavigation();
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
          <Text
            onPress={() => navigation.goBack()}
            style={{ fontWeight: "bold", fontSize: 16 }}
          >
            Transfer
          </Text>
        </View>
        <View
          style={{
            paddingLeft: 20,
            paddingVertical: 12,
            backgroundColor: "#19918f",
            marginBottom: 20,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>To: </Text>
          <TextInput
            style={{ color: "#fff", fontSize: 16 }}
            onChangeText={(value) => handleChange("from_to", value.slice(0, 6))}
            placeholder="penerima"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="phone-pad"
          />
        </View>
        <View
          style={{ padding: 20, backgroundColor: "#FAFBFD", marginBottom: 20 }}
        >
          <Text style={{ color: "#999", fontSize: 16 }}>Amount</Text>
          <View style={{ marginTop: 16, flexDirection: "row" }}>
            <Text style={{ width: 30, fontSize: 16 }}>IDR</Text>
            <TextInput
              style={{
                marginStart: 6,
                borderBottomWidth: 1,
                width: 320,
                borderBottomColor: "#999",
                fontSize: 40,
              }}
              value={transactionData.amount}
              onChangeText={(value) => handleChange("amount", value)}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="phone-pad"
            />
          </View>
        </View>
        <View
          style={{ padding: 20, backgroundColor: "#FAFBFD", marginBottom: 20 }}
        >
          <Text style={{ color: "#999", fontSize: 16 }}>Notes</Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              width: 320,
              borderBottomColor: "#999",
              fontSize: 16,
            }}
            value={transactionData.description}
            onChangeText={(value) => handleChange("description", value)}
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <View style={{ padding: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#19918f",
              paddingVertical: 16,
              borderRadius: 10,
            }}
            onPress={handleSubmit}
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

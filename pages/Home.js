import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Home() {
  const transactions = [
    {
      name: "Adityo Gizwanda",
      type: "Transfer",
      amount: "- 75.000,00",
      date: "08 December 2024",
      isPositive: false,
    },
    {
      name: "Adityo Gizwanda",
      type: "Topup",
      amount: "+ 75.000,00",
      date: "08 December 2024",
      isPositive: true,
    },
    {
      name: "Adityo Gizwanda",
      type: "Transfer",
      amount: "- 75.000,00",
      date: "08 December 2024",
      isPositive: false,
    },
    {
      name: "Adityo Gizwanda",
      type: "Transfer",
      amount: "- 75.000,00",
      date: "08 December 2024",
      isPositive: false,
    },
  ];

  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 30 }}
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
            source={require("../assets/profile.jpg")}
            style={{ width: 46, height: 46, borderRadius: 100 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Aldra Kasyfil Aziz</Text>
            <Text>Personal Account</Text>
          </View>
          <View style={{ flex: 1 }}></View>
          <Image
            source={require("../assets/light.png")}
            style={{ width: 42, height: 42 }}
          />
        </View>
        <View style={{ padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 24 }}>
                Good Morning, Aldra
              </Text>
              <Text style={{ marginTop: 5, fontSize: 16 }}>
                Check all your incoming and outgoing transactions here
              </Text>
            </View>
            <Image
              source={require("../assets/light.png")}
              style={{ width: 58, height: 58 }}
            />
          </View>

          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 20,
              paddingVertical: 12,
              flexDirection: "row",
              backgroundColor: "#19918f",
              justifyContent: "space-between",
              borderRadius: 10,
            }}
          >
            <Text style={boxAccount.text}>Account No.</Text>
            <Text style={boxAccount.text}>100899</Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              elevation: 3, // For Android
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 10,
                }}
              >
                Balance
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 28,
                    fontWeight: "500",
                  }}
                >
                  Rp10.000.000
                </Text>
                <Icon
                  style={{ padding: 10 }}
                  name="eye-outline"
                  size={20}
                  color="gray"
                />
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: "#19918f",
                  borderRadius: 5,
                }}
                onPress={() => {
              console.log("Topup");
              navigation.navigate("Topup");
            }}
              >
                <Icon name="add" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  padding: 10,
                  backgroundColor: "#19918f",
                  borderRadius: 5,
                }}
                onPress={() => {
                  console.log("Transfer");
                  navigation.navigate("Transfer");
                }}
              >
                <Icon name="paper-plane-outline" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Table */}
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.transactionContainer}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                marginBottom: 10,
                paddingBottom: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
            >
              Transaction History
            </Text>
            {transactions.map((transaction, index) => (
              <View key={index} style={styles.transactionRow}>
                <View style={styles.circle} />
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>{transaction.name}</Text>
                  <Text style={styles.transactionType}>{transaction.type}</Text>
                  <Text style={styles.transactionDate}>{transaction.date}</Text>
                </View>
                <View style={styles.transactionAmountContainer}>
                  <Text
                    style={[
                      styles.transactionAmount,
                      transaction.isPositive
                        ? styles.positive
                        : styles.negative,
                    ]}
                  >
                    {transaction.amount}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  transactionContainer: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 20,
    elevation: 3,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  transactionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingVertical: 4,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
    marginRight: 12,
  },
  transactionDetails: {
    flex: 2,
  },
  transactionName: {
    fontSize: 16,
  },
  transactionType: {
    fontSize: 14,
  },
  transactionAmountContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  transactionAmount: {
    fontSize: 16,
  },
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
  transactionDate: {
    fontSize: 12,
    color: "#999",
  },
});

const boxAccount = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 16,
  },
});

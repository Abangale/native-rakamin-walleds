import { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { getTransactions } from "../api/restApi";

export default function TableTransaction() {
    const [transactions, setTransactions] = useState(null);
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions(); // Call the API function
        setTransactions(data); // Update the transactions state with the API response
      } catch (error) {
        console.error("Failed to fetch transactions:", error.message);
      }
    };

    useEffect(() => {
      fetchTransactions(); // Fetch transactions data when the component mounts
    }, []);

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(date);
    };

    const checkType = (typeString) => {
      if (typeString === "c") {
        typeString = "Topup"
        return typeString
      } else {
        typeString = "Transfer"
        return typeString
      }
    }

  return (
    <View style={styles.transactionContainer}>
      <Text style={styles.headerText}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.transactionRow}>
            <View style={styles.circle} />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>{item.from_to}</Text>
              <Text style={styles.transactionType}>{checkType(item.type)}</Text>
              <Text style={styles.transactionDate}>{formatDate(item.updated_at)}</Text>
            </View>
            <View style={styles.transactionAmountContainer}>
              <Text
                style={[
                  styles.transactionAmount,
                  item.type === "c" ? styles.positive : styles.negative,
                ]}
              >
                {item.amount}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  transactionContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 20,
    elevation: 3,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
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

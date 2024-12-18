import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function DropdownPayment({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("BYOND Pay"); // Default selected value

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selection
    if (onSelect) {
      onSelect(option); // Call the parent component's onSelect handler
    }
  };

  return (
    <View>
      {/* Dropdown Header */}
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
        <Text style={styles.headerText}>{selectedOption}</Text>
        <Icon
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={20}
          color="black"
        />
      </TouchableOpacity>

      {/* Dropdown Options */}
      {isOpen && (
        <View style={styles.dropdownContent}>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => handleOptionSelect("BYOND Pay")}
          >
            <Text style={styles.dropdownItemText}>BYOND Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => handleOptionSelect("Transfer")}
          >
            <Text style={styles.dropdownItemText}>Transfer</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownHeader: {
    backgroundColor: "#FAFBFD",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 16,
  },
  dropdownContent: {
    backgroundColor: "#FAFBFD",
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 2, // Shadow for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  dropdownItemText: {
    fontSize: 14,
    color: "#333",
  },
});
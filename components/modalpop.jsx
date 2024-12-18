import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../context/authContext";

export default function ModalComp({ modalVisible, toggleModal }) {
  const { logout } = useAuth();

  const handleLogout = async () => {
    toggleModal();
    await logout(); // Clear user session
    alert("Logged out successfully");
  };

  return (
    <SafeAreaView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleLogout}
            >
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 2, backgroundColor: 'lightgray', borderRadius: 20, padding: 4, paddingHorizontal: 8}}
              onPress={() => {
                toggleModal()}}
            >
              <Text style={{}}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    marginTop: 75,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

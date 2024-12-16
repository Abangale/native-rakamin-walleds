import React, {useState} from "react";
import { Alert, Modal, StyleSheet, Text, Button, View, SafeAreaView, Pressable  } from "react-native";

export default function ModalComp() {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <SafeAreaView style={styles.centeredView}>
            <Button title="Show Modal" onPress={() => setModalVisible(true)} />
                <Modal onRequestClose={() => setModalVisible(false)}
                visible={modalVisible}
                presentationStyle="pageSheet"
                animationType="slide"
                transparent={true}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Button title="Close Modal" onPress={() => setModalVisible(false)}  />
                    </View>
                </Modal>
        </SafeAreaView>
    )
}
import { useState } from "react";
import { StyleSheet, Button, TextInput, Platform, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FormComponent({ state }) {
  console.log("state nya adalah: ", state);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validPassword = password.length > 7 ? true : valse;
    if (!validPassword) {
      setErrors({
        messagePasswordError: "Password kurang dari 7",
      });
      return false;
    }
  };

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 30 : 0 }}>
      {state === "register" && (
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCorrect={false}
        autoCapitalize="none"
      ></TextInput>
      {errors.messageEmailError && <Text>{errors.messageEmailError}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Enter your password address"
        value={password}
        onChangeText={setPassword}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
      ></TextInput>
      {errors.messagePasswordError && (
        <Text>{errors.messagePasswordError}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        autoCorrect={false}
        inputMode="numeric"
        autoCapitalize="none"
      ></TextInput>
      <TextInput
        style={[styles.input]}
        placeholder="Notes"
        value={notes}
        multiline={true}
        numberOfLines={4}
        onChangeText={setNotes}
      ></TextInput>

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setSelection(!isSelected)}
      >
        <View style={[styles.checkbox, isSelected && styles.checkedCheckbox]} />
        <Text style={styles.label}>I agree to the terms and conditions</Text>
      </TouchableOpacity>

      <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
      <Button title="Submit" />

      {state === "login" ? (
        <Button title="Login" onPress={() => console.log("login")}></Button>
      ) : (
        <Button
          title="Register"
          onPress={() => console.log("register")}
        ></Button>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
  },
  notesInput: {
    height: 200,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 8,
  },
  checkedCheckbox: {
    backgroundColor: '#4CAF50',
  },
});

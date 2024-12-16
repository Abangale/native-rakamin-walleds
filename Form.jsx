import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  Platform,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from "react-native";

export default function FormComponent({ state }) {
  console.log("state nya adalah: ", state);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarURI, setAvatarURI] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [errors, setErrors] = useState({});

  const navigation = useNavigation();

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
      {/* {state === "register" && (
        <TextInput
          style={styles.input}
          placeholder="Fullname"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      )} */}

      {state === "login" ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCorrect={false}
            autoCapitalize="none"
          ></TextInput>
          {errors.messageEmailError && <Text>{errors.messageEmailError}</Text>}
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
          ></TextInput>
          {errors.messagePasswordError && (
            <Text>{errors.messagePasswordError}</Text>
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log("login");
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={{ paddingHorizontal: 10, flexDirection: "row" }}>
            <Text>Don't have account?</Text>
            <Text
              style={styles.hereText}
              onPress={() => navigation.navigate("Register")}
            >
              Register here
            </Text>
          </View>
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Fullname"
            value={name}
            onChangeText={(text) => setName(text)}
            autoCorrect={false}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCorrect={false}
            autoCapitalize="none"
          ></TextInput>
          {errors.messageEmailError && <Text>{errors.messageEmailError}</Text>}
          <TextInput
            style={styles.input}
            placeholder="Password"
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
            placeholder="Avatar URI"
            value={avatarURI}
            onChangeText={(text) => setAvatarURI(text)}
            autoCorrect={false}
            autoCapitalize="none"
          ></TextInput>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setSelection(!isSelected)}
          >
            <View
              style={[styles.checkbox, isSelected && styles.checkedCheckbox]}
            />
            <Text style={styles.label}>
              By signing up you agree to our Terms and condition
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("login")}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <View style={{ paddingHorizontal: 10, flexDirection: "row" }}>
            <Text>Have an account?</Text>
            <Text style={styles.hereText} onPress={() => navigation.goBack()}>
              Login here
            </Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: 320,
    backgroundColor: "#FAFBFD",
  },
  button: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: 320,
    backgroundColor: "#19918f",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
  },
  hereText: {
    marginLeft: 6,
    color: "#19918f",
  },
  notesInput: {
    height: 200,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    height: 16,
    width: 16,
    marginLeft: 10,
    marginRight: 8,
    backgroundColor: "white",
    borderRadius: 5,
  },
  checkedCheckbox: {
    backgroundColor: "#4CAF50",
  },
  label: {
    margin: 10,
    marginTop: 15,
    width: 280,
  },
});

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  Alert,
} from "react-native";
import { registerPosts, loginPosts } from "../api/restApi";
import { useAuth } from "../context/authContext";

export default function FormComponent({ state }) { 
  const [avatarURI, setAvatarURI] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [errors, setErrors] = useState({});

  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    phone_number: "",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const validPassword = formData.password.length >= 8;
    const validNumber = /^(?:\+|\d{1})\d{9,13}$/.test(formData.phone_number);

    if (!validEmail) {
      errors.email = "Invalid email format";
    }
    if (!validPassword) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (state === "register" && !validNumber) {
      errors.phone_number =
        "Phone number must start with '+' or '0' and be 10-16 digits long";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const { login } = useAuth();

  const handleSubmit = async () => {
    console.log("Password entered:", formData.password);
    if (state === "register" && !isSelected) {
      Alert.alert("Error", "You must agree to the Terms and Conditions.");
      return;
    }

    try {
      let response;
      if (state === "login") {
        response = await loginPosts({
          email: formData.email,
          password: formData.password,
        }); // Send login data
        login(response.data.token);
        Alert.alert("Success", "Login successful!");
        // navigation.navigate("Navbar");
      } else {
        response = await registerPosts(formData); // If state is 'register', call registerPosts
        Alert.alert("Success", "User registered successfully!");
        setFormData({
          full_name: "",
          email: "",
          password: "",
          phone_number: "",
        });
        setSelection(false);
        navigation.navigate("Login");
      }
    } catch (error) {
      Alert.alert("Error", error.message); // Handle errors
    }
  };

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 30 : 0 }}>
      {state === "login" ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => handleChange("email", value)}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          {errors.messageEmailError && <Text>{errors.messageEmailError}</Text>}
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={formData.password}
            onChangeText={(value) => handleChange("password", value)}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
            value={formData.full_name}
            onChangeText={(value) => handleChange("full_name", value)}
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => handleChange("email", value)}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={formData.password}
            onChangeText={(value) => handleChange("password", value)}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={formData.phone_number}
            onChangeText={(value) => handleChange("phone_number", value)}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="phone-pad"
          />
          {errors.phone_number && (
            <Text style={styles.errorText}>{errors.phone_number}</Text>
          )}
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setSelection(!isSelected)}
          >
            <View
              style={[styles.checkbox, isSelected && styles.checkedCheckbox]}
            />
            <Text style={styles.label}>
              By signing up you agree to our Terms and conditions.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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

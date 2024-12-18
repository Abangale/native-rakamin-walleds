import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "http://54.254.164.127/api/v1/",
});

export const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem("token", token);
    console.log("Token saved successfully:", token);
  } catch (error) {
    console.error("Failed to save token:", error.message);
  }
};

export const getProfile = async () => {
  try {
    // Retrieve the token from AsyncStorage
    const token = await AsyncStorage.getItem("token");
    console.log("Token retrieved:", token);
    if (!token) {
      throw new Error("Token not found. Please log in.");
    }

    // Make the API request with headers including the token
    const response = await api.get("/users/me", {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to Authorization header
        "Content-Type": "application/json", // Optional: Add content type if needed
      },
    });

    return response.data.data;
  } catch (error) {
    if (error.response?.status === 401) {
      console.error("Unauthorized: Please check your token.");
    } else {
      console.error("Failed to fetch profile:", error.message);
    }
    throw error;
  }
};

export const getTransactions = async () => {
  try {
    // Retrieve the token from AsyncStorage
    const token = await AsyncStorage.getItem("token");
    console.log("Token retrieved:", token);
    if (!token) {
      throw new Error("Token not found. Please log in.");
    }

    // Make the API request with headers including the token
    const response = await api.get("/transactions", {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to Authorization header
        "Content-Type": "application/json", // Optional: Add content type if needed
      },
    });

    return response.data.data;
  } catch (error) {
    if (error.response?.status === 401) {
      console.error("Unauthorized: Please check your token.");
    } else {
      console.error("Failed to fetch transaction:", error.message);
    }
    throw error;
  }
};

export const registerPosts = async (postData) => {
  try {
    console.log("Sending data to API:", postData);
    const response = await api.post("auth/register", postData);
    console.log("API response:", response.data);
    return response.data;
  } catch (error) {
    console.error("API error:", error.response.data);
    throw new Error("Failed to create user: " + error.message);
  }
};

export const loginPosts = async (loginData) => {
  try {
    const response = await api.post("auth/login", loginData);
    console.log("API response:", response.data);

    const token = response.data.data.token; // Access token from response structure
    if (token) {
      await AsyncStorage.setItem("token", token); // Save token in AsyncStorage
      console.log("Token saved:", token);
    } else {
      console.error("No token received in the response.");
    }

    return response.data;
  } catch (error) {
    console.error("API error:", error.response?.data || error.message);
    throw new Error("Failed to login: " + error.message);
  }
};

export const transactionsPosts = async (postData) => {
  try {
    const token = await AsyncStorage.getItem("token");
    console.log("Sending data to API:", postData);
    const response = await api.post("/transactions", postData, {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to Authorization header
      },
    });
    console.log("API response:", response.data);
    return response.data;
  } catch (error) {
    console.error("API error:", error.response.data);
    throw new Error("Failed to make transaction: " + error.message);
  }
};

export default api;

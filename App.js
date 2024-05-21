import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  // Check if the guess is empty or not between 1-20)

  const checkGuess = () => {
    if (!guess || parseInt(guess) < 1 || parseInt(guess) > 20) {
      setMessage("Please enter a valid number between 1 and 20.");
      return;
    }
    // Generate a random number
    let randomNumber = Math.floor(Math.random() * 20) + 1;

    // Comparing the guess to the random number
    let result = "";
    if (parseInt(guess) < Math.floor(Math.random() * 20) + 1) {
      result = "Lower";
    } else if (parseInt(guess) > Math.floor(Math.random() * 20) + 1) {
      result = "Higher";
    } else {
      result = "Correct!";
    }
    setMessage(result);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(120,255,214,0.8)", "rgba(168,255,120,0)"]}
        style={styles.background}
      />
      <Text style={styles.title}>Guess a number between 1 and 20!</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={(text) => setGuess(text)} //event to read the user input
        placeholder="Your guess"
      />
      <TouchableOpacity onPress={checkGuess} style={styles.button}>
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>
      <Text style={styles.message}>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  title: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 5,
    width: "80%",
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  message: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginBottom: 20,
  },
});

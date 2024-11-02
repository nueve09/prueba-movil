import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";

import users from "../../data/users.json";

import login from "../../assets/icons/arrowRight.png";

import styles from "./styles";

export default function LoginScreen({ setUser, navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setUser(user);
          navigation.navigate("Tasks", { userId: user.userId });
        }
      } catch (error) {
        console.error("Error al recuperar la sesión del usuario", error);
      }
    };

    checkUserSession();
  }, []);

  const handleLogin = async () => {
    setLoading(true);

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    setLoading(false);
    if (user) {
      setUser(user);

      await AsyncStorage.setItem("user", JSON.stringify(user));

      navigation.navigate("Tasks", { userId: user.userId });
    } else {
      Alert.alert("Error", "Credenciales incorrectas.");
    }
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <LinearGradient
          colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]}
          style={styles.gradient}
        />
        <Image
          style={[styles.imgInit, { width: screenWidth }]}
          source={require("../../assets/images/imgInit.png")}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.title}>Organizador de Tareas</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {loading ? (
        <View style={styles.containerLoader}>
          <ActivityIndicator size="large" color="#6C63FF" />
        </View>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
          <Image source={login} style={styles.loginIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

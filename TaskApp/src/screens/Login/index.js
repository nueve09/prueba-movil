import React, { useState, useEffect, useContext } from "react";
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

import AuthContext from "../../context/AuthContext";

import loginIcon from "../../assets/icons/arrowRight.png";

import styles from "./styles";

export default function LoginScreen({ navigation, route }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (route.params?.clearInputs) {
      clearInputs();
    }
  }, [route.params?.clearInputs]);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const isLogged = await login(email, password);

      if (!isLogged || !isLogged.userId) {
        throw new Error("No se pudo obtener el usuario");
      }

      setLoading(false);
      navigation.navigate("Tasks", { userId: isLogged.userId });
    } catch (error) {
      setLoading(false);
      console.error("Error de login:", error);
      Alert.alert("Error", error.message);
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
          <Image source={loginIcon} style={styles.loginIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

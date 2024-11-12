import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { logoutIcon } from "../../helpers/index";

import styles from "./styles";

const Header = ({ onLogout, clearInputs }) => {
  const handleLogout = () => {
    if (clearInputs && typeof clearInputs === "function") {
      clearInputs();
    }
    onLogout();
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Organizador de Tareas</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutIconContainer}>
        <Image source={logoutIcon} style={styles.logoutIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

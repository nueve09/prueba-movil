import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React from 'react';
import { colors } from '../config/theme';

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

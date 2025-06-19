import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';
import { colors, fonts, fontSizes, spacing } from '../config/theme';
import { verticalScale } from '../utils/responsive';

const Input = (props: TextInputProps) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        {...props}
        placeholderTextColor={colors.textSecondary}
        style={[styles.input, props.style]}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: verticalScale(60),
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: verticalScale(22),
    backgroundColor: 'white',
    fontSize: fontSizes.base,
    color: colors.text,
    marginBottom: spacing.md,
    fontFamily: fonts.latoRegular,
    fontWeight: 500,
  },
});

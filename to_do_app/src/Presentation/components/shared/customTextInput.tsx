import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/theme';

interface CustomTextInputProps {
  value: string;
  placeholder: string;
  password?:boolean;
  setValue: (newString: string) => void;
}

const CustomTextInput = ({
  value,
  placeholder,
  setValue,
  password = false
}: CustomTextInputProps) => {
  return (
    <View>
      <TextInput
        secureTextEntry={password}
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={newValue => setValue(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 55,
    paddingLeft: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
    marginVertical: 5
  },
});

export default CustomTextInput;

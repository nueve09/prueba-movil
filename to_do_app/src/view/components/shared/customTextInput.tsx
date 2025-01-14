import {View, TextInput, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import React, { useState } from 'react';
import {Colors, GlobalFontFamily} from '../../theme/theme';
import { hidePassword, showPassword } from '../../theme/images';

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
  const [showPass, setShowPass] = useState(false)
  return (
    <View style={styles.inputContainer}>
      <TextInput
        secureTextEntry={password && !showPass}
        placeholder={placeholder}
        style={styles.input}
        value={value}
        placeholderTextColor={Colors.gray}
        onChangeText={newValue => setValue(newValue)}
      />
      {
        password &&
      <TouchableOpacity style={styles.showButton} onPress={()=>setShowPass(!showPass)}>
        <Image source={showPass ? showPassword: hidePassword} style={styles.eyeIcon}/>
      </TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer:{
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
    flexDirection:'row',
    marginVertical: 5,
    paddingRight:10,
  },
  input: {
    height: 55,
    paddingLeft: 20,
    flex:1,
    fontFamily:GlobalFontFamily.lex_light
  },
  showButton:{
    justifyContent:'center',
    padding:8,
    borderRadius:10,
    alignItems:'center',
    width:50
  },
  showButtonLabel:{
    color:Colors.accent,
    textAlign:'center'
  },
  eyeIcon:{
    width:25,
    height:25,
    tintColor:Colors.primary
  }
});

export default CustomTextInput;

import {View, TextInput, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import React, { useState } from 'react';
import {Colors} from '../../theme/theme';
import { hidePassword, showPassword } from '../../theme/images';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Pendiente', value: false },
    { label: 'Completado', value: true },
];

interface CustomDropDownProps {
  value: string;
  placeholder: string;
  password?:boolean;
  setValue: (newString: string) => void;
}

const CustomDropDown = ({
  value,
  placeholder,
  setValue,
  password = false
}: CustomDropDownProps) => {
  const [showPass, setShowPass] = useState(false)
  return (
    <View style={styles.inputContainer}>
      <Dropdown
        placeholder={placeholder}
        data={data}
        labelField='label'
        valueField='value'
        onChange={(val)=>{console.log(val)}}
        style={styles.input}
        value={value}
        onChangeText={newValue => setValue(newValue)}
        renderItem={(item)=>(
            <View>
                <Text>item</Text>
            </View>
        )}
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
    flex:1
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

export default CustomDropDown;

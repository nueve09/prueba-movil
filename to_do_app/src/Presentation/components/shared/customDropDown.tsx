import {View, TextInput, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import React, { useState } from 'react';
import {Colors} from '../../theme/theme';
import { dropdownArrow, hidePassword, showPassword } from '../../theme/images';
import { Dropdown } from 'react-native-element-dropdown';

interface StatusType {
    label:string;
    value:string;
    _index?:number
}

const data:StatusType[] = [
    { label: 'Pendiente', value: 'pendiente' },
    { label: 'Completado', value: 'completado' },
];

interface CustomDropDownProps {
  value: string;
  placeholder: string;
  setValue: (newString: string) => void;
}

const ArrowIcon = () => (
  <View>
    <Image source={dropdownArrow} style={{width:20, height:20, resizeMode:'contain'}}/>
  </View>
)

const CustomDropDown = ({
  value,
  placeholder,
  setValue,
}: CustomDropDownProps) => {
  return (
    <View style={styles.inputContainer}>
      <Dropdown
        placeholder={placeholder}
        data={data}
        labelField='label'
        valueField='value'
        onChange={(val)=>setValue(val.label)}
        style={styles.input}
        renderRightIcon={()=><ArrowIcon/>}
        containerStyle={styles.dropdownContainer}
        value={value}
        renderItem={({label,value}:StatusType)=>(
            <View style={styles.dropdownItem}>
                <Text>{label}</Text>
            </View>
        )}
      />
     
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
  dropdownContainer:{ 
    borderWidth:1, 
    borderRadius:20,
    borderColor:Colors.primary, 
    overflow:'hidden'
  },
  dropdownItem:{
    padding:20
  }
});

export default CustomDropDown;

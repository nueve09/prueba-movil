import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomTextInput from '../shared/customTextInput'
import CustomButton from '../shared/customButton'
import { logout as logoutIcon, METRICS } from '../../theme/theme'
import { useLogout } from '../../hooks/useLogout'

const Header = () => {

    const { logout } = useLogout()

  return (
    <View style={styles.container}>
        <View style={styles.titlerow}>
          <Text style={styles.title}>Organizador de Tareas</Text>
          <TouchableOpacity style={styles.icon} onPress={logout}>
            <Image source={logoutIcon} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View>

        <CustomTextInput
          placeholder='Buscar tarea'
          setValue={()=>{}}
          value=''
        />

        <CustomButton
        label='Agregar'
        onPress={()=>{}}
        />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
      height:METRICS.height/2.5,
      backgroundColor:'red',
      borderBottomLeftRadius:40,
      borderBottomRightRadius:40,
      paddingHorizontal:20,
      justifyContent:'space-between',
      paddingTop:5,
      paddingBottom:15
    },
    titlerow:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    title:{
      padding:5
    },
    icon:{
      position:'absolute',
      right:5
    },
    image:{
      height:20,
      width:20
    }
  })

export default Header
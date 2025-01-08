import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { principal } from '../../theme/images'

const MainLogo = () => {
  return (
    <View style={styles.container}>
        <Image source={principal} style={styles.principal}/>
      <Text style={styles.title}>Organizador de Tareas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        minHeight:250,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20
    },
    principal:{
        resizeMode:'contain',
        width:200,
        height:300
    },
    title:{
        textAlign:'center',
        position:'absolute',
        bottom:5,
        fontSize:25,
        width:180
    }
})

export default MainLogo
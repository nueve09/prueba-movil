import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalFontFamily } from '../../theme/theme';

interface errorLabelProps{
    error:string;
}

const ErrorLabel = ({error}:errorLabelProps) => {
  return (
    <View style={{height:20}}>
    {
        error!=='' && <Text style={styles.error}>{error}</Text>
    }
    </View>
  )
}

export default ErrorLabel

const styles = StyleSheet.create({
    error:{
        textAlign:'center',
        color:'red',
        fontFamily:GlobalFontFamily.lex_medium
    }
})
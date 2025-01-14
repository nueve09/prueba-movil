import { ReactNode } from 'react'
import {  KeyboardAvoidingView, Platform } from 'react-native'
import { Colors } from '../../theme/theme'

interface KeyboardAvoidContainerProps{
    children:ReactNode
}
const KeyboardAvoidContainer = ({children}:KeyboardAvoidContainerProps) => {
  return (
    <KeyboardAvoidingView   behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1, backgroundColor:Colors.white}}>
      {children}
    </KeyboardAvoidingView >
  )
}

export default KeyboardAvoidContainer
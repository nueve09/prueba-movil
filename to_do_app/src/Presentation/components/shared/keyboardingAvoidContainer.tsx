import { ReactNode } from 'react'
import {  KeyboardAvoidingView, Platform } from 'react-native'

interface KeyboardAvoidContainerProps{
    children:ReactNode
}
const KeyboardAvoidContainer = ({children}:KeyboardAvoidContainerProps) => {
  return (
    <KeyboardAvoidingView   behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
      {children}
    </KeyboardAvoidingView >
  )
}

export default KeyboardAvoidContainer
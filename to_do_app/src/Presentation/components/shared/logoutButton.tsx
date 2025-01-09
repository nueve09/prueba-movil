import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { logout } from '../../theme/images'
import { useTaskViewModel } from '../../viewmodels/useTaskViewModel'

const LogoutButton = () => {
    const { requestExitConfirmation } = useTaskViewModel();
  return (
    <TouchableOpacity style={styles.icon} onPress={requestExitConfirmation}>
        <Image source={logout} style={styles.imageLogout} />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    icon:{
        position:'absolute',
        right:5
      },
      imageLogout:{
        height:20,
        width:20
      },
})
export default LogoutButton
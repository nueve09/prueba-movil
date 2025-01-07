import { View, StyleSheet } from 'react-native'
import React from 'react'
import CustomTextInput from '../shared/customTextInput'
import CustomButton from '../shared/customButton'
import { ButtonType } from '../../theme/theme'
import { useLogin } from '../../hooks/useLogin'
import { useForm } from '../../hooks/useForm'

const LoginForm = () => {

    const { submit , error } = useLogin();
    const { setEmail , setPassword , login:{email,password} } = useForm(); 

  return (
    <View style={styles.form}>
        <CustomTextInput
          placeholder='Correo electronico'
          value={email}
          setValue={(val)=>setEmail(val)}
        />
        <CustomTextInput
          password={true}
          placeholder='Contraseña'
          value={password}
          setValue={(val)=>setPassword(val)}
        />
        <CustomButton
          disable={email==='' || password ==='' }
          onPress={()=>submit(email,password)}
          label='Agregar'
          type={ButtonType.Filled}
        />
        {/* TODO: Agregar mensage de error */}
      </View>
  )
}

const styles = StyleSheet.create({
    form:{
      paddingHorizontal:20,
      paddingBottom:100
    }
  });

export default LoginForm
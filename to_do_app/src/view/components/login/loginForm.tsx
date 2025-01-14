import { View, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import CustomTextInput from '../shared/customTextInput'
import CustomButton from '../shared/customButton'
import { ButtonType } from '../../theme/theme'
import ErrorLabel from '../shared/errorLabel'
import { useSessionViewModel } from '../../../viewmodels/useSessionViewModel'
import { useLoginForm } from '../../../hooks/auth/useLoginForm'

const LoginForm = () => {

    const { submit , error , isLoading } = useSessionViewModel();
    const { setEmail , setPassword , loginForm:{email,password} } = useLoginForm(); 

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
        {
            isLoading ? 
            <ActivityIndicator/>
            : 
        <CustomButton 
        //   disable={email==='' || password ==='' }
          onPress={()=>submit(email,password)}
          label='Entrar'
          type={ButtonType.Filled}
          showIcon={true}
        />}

       <ErrorLabel error={error}/>
      </View>
  )
}

const styles = StyleSheet.create({
    form:{
      paddingHorizontal:20,
      paddingBottom:100
    },
   
  });

export default LoginForm
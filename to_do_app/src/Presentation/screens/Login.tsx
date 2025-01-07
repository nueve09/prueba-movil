import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LoginForm from '../components/login/loginForm';

export default function Login() {

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        {/* TODO: Crear un componente para la imagen */}
      <View style={{flex: 1}}>
        <Text>Organizador de tareas</Text>
      </View>

      <LoginForm />
    </KeyboardAvoidingView>
  );
}

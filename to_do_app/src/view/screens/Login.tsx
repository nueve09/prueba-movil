import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import LoginForm from '../components/login/loginForm';
import MainLogo from '../components/login/mainLogo';

export default function Login() {

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1}}>
        <>
          <MainLogo/>
          <LoginForm />
        </>
       </TouchableWithoutFeedback >
    </KeyboardAvoidingView>
  );
}

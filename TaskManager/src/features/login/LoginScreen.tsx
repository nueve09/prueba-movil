import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useAuthStore } from '../../state/useAuthStore';
import { colors, fonts, fontSizes, spacing } from '../../config/theme';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { fontScale, verticalScale } from '../../utils/responsive';
import ErrorModal from '../../components/ErrorModal';

import BackgroundImagesLogin from '../../components/BackgroundImagesLogin';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const login = useAuthStore(state => state.login);

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleLogin = async () => {
    setError('');

    if (!email || !password) {
      setError('Todos los campos son obligatorios');
      setErrorVisible(true);
      return;
    }

    if (!validateEmail(email)) {
      setError('El correo no es válido');
      setErrorVisible(true);
      return;
    }

    setLoading(true);
    const success = await login(email, password);
    setLoading(false);

    if (!success) {
      setError('Credenciales incorrectas');
      setErrorVisible(true);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <ErrorModal
        visible={errorVisible}
        message={error}
        onClose={() => setErrorVisible(false)}
      />

      <BackgroundImagesLogin />
      <View style={styles.content}>
        <Text style={styles.title}>Organizador de Tareas</Text>
        <View style={styles.contentButtons}>
          <Input
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Input
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <Button
          title="Entrar"
          onPress={handleLogin}
          icon
          disabled={loading}
          style={styles.buttonLogin}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(50),
  },
  content: {
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    zIndex: 1,
    paddingBottom: verticalScale(100),
  },
  contentButtons: {
    width: '95%',
  },
  image: {
    width: 220,
    height: 180,
    marginBottom: spacing.md,
    zIndex: 2,
  },
  title: {
    fontSize: fontScale(24),
    fontWeight: '600',
    marginBottom: verticalScale(30),
    color: colors.text,
    fontFamily: fonts.lexendSemiBold,
    paddingHorizontal: '22%',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 20,
    marginBottom: spacing.sm,
  },

  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginTop: spacing.md,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: fontSizes.base,
  },
  buttonLogin: {
    marginTop: verticalScale(20),
    ...Platform.select({
      ios: {
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.35,
        shadowRadius: 14,
      },
      android: {
        elevation: 0,
      },
    }),
  },
});

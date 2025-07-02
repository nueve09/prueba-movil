import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { colors, spacing, fontSizes } from '../config/theme';

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error?: Error };

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  reset = () => this.setState({ hasError: false, error: undefined });

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>¡Vaya! Ha ocurrido un error.</Text>
          <Text style={styles.message}>{this.state.error?.message}</Text>
          <Button title="Reintentar" onPress={this.reset} />
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.md,
  },
  title: {
    fontSize: fontSizes.lg,
    fontWeight: '700',
    marginBottom: spacing.sm,
    color: colors.error,
  },
  message: {
    fontSize: fontSizes.base,
    textAlign: 'center',
    marginBottom: spacing.lg,
    color: colors.text,
  },
});

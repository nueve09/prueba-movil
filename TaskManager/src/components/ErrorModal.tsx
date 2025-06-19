import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, fontSizes } from '../config/theme';
import { verticalScale, moderateScale } from '../utils/responsive';

type ErrorModalProps = {
  visible: boolean;
  message: string;
  onClose: () => void;
};

const ErrorModal: React.FC<ErrorModalProps> = ({
  visible,
  message,
  onClose,
}) => (
  <Modal
    transparent
    animationType="fade"
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Text style={styles.title}>Error</Text>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export default ErrorModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlayBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: colors.background,
    borderRadius: 22,
    padding: spacing.lg,
    alignItems: 'center',
    shadowColor: colors.shadowBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
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
    marginBottom: spacing.md,
    color: colors.text,
  },
  button: {
    marginTop: spacing.sm,
    backgroundColor: colors.primary,
    borderRadius: 22,
    paddingVertical: verticalScale(12),
    paddingHorizontal: moderateScale(24),
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: fontSizes.base,
    color: colors.background,
    fontWeight: '600',
  },
});

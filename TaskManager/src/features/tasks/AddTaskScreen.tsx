import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import { useTaskStore } from '../../state/useTaskStore';
import { useAuthStore } from '../../state/useAuthStore';
import { colors, spacing } from '../../config/theme';
import { fontScale } from '../../utils/responsive';
import Header from '../../components/Header';
import ErrorModal from '../../components/ErrorModal';

const AddTaskScreen = ({ navigation }: any) => {
  const addTask = useTaskStore(state => state.addTask);
  const userId = useAuthStore(state => state.user?.userId) ?? 0;
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);

  const estadoOptions = [
    { label: 'Completada', value: 'true' },
    { label: 'Pendiente', value: 'false' },
  ];

  const handleSave = () => {
    if (!title.trim()) {
      setError('El título de la tarea no puede estar vacío');
      setErrorVisible(true);
      return;
    }
    if (status === '') {
      setError('Por favor selecciona el estado de la tarea');
      setErrorVisible(true);
      return;
    }
    const completed = status === 'true';
    addTask({ title: title.trim(), completed, userId });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header title={'Agregar tarea'} navigation={navigation} />
      <View style={styles.form}>
        <View>
          <Input
            placeholder="Nombre de la tarea"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />
          <Dropdown
            options={estadoOptions}
            selectedValue={status}
            onValueChange={setStatus}
          />
        </View>
        <View>
          <Button
            title="Guardar"
            onPress={handleSave}
            style={styles.saveButton}
          />
          <Button
            title="Cancelar"
            variant="outline"
            onPress={() => navigation.goBack()}
            style={styles.cancelButton}
          />
        </View>
      </View>
      <ErrorModal
        visible={errorVisible}
        message={error}
        onClose={() => setErrorVisible(false)}
      />
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.background,
  },
  form: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'space-around',
  },
  input: {
    marginBottom: spacing.md,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  toggleLabel: {
    fontSize: fontScale(16),
    marginRight: spacing.sm,
    color: colors.text,
  },

  saveButton: {
    marginBottom: spacing.md,
  },
  cancelButton: {},
});

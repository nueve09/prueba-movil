import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import { useTaskStore, Task } from '../../state/useTaskStore';
import { colors, spacing } from '../../config/theme';
import Header from '../../components/Header';
import ErrorModal from '../../components/ErrorModal';

const EditTaskScreen = ({ route, navigation }: any) => {
  const { id } = route.params;
  const tasks = useTaskStore(state => state.tasks);
  const editTask = useTaskStore(state => state.addTask);
  const deleteTask = useTaskStore(state => state.deleteTask);

  const taskToEdit = tasks.find((t: Task) => t.id === id);
  const [title, setTitle] = useState(taskToEdit?.title || '');
  const [status, setStatus] = useState(
    taskToEdit ? String(taskToEdit.completed) : '',
  );
  const [error, setError] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);

  useEffect(() => {
    if (!taskToEdit) {
      setError('Tarea no encontrada');
      setErrorVisible(true);
      navigation.goBack();
    }
  }, [navigation, taskToEdit]);

  const estadoOptions = [
    { label: 'Completada', value: 'true' },
    { label: 'Pendiente', value: 'false' },
  ];

  const handleSave = () => {
    if (!title.trim()) {
      setError('El título no puede estar vacío');
      setErrorVisible(true);
      return;
    }
    if (status === '') {
      setError('Selecciona el estado');
      setErrorVisible(true);
      return;
    }

    deleteTask(id);
    editTask({
      title: title.trim(),
      completed: status === 'true',
      userId: taskToEdit!.userId,
    });
    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert('Eliminar tarea', '¿Estás seguro?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Eliminar',
        style: 'destructive',
        onPress: () => {
          deleteTask(id);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Header title={'Editar tarea'} navigation={navigation} />
      <View style={styles.form}>
        <View>
          <Input
            placeholder="Título de la tarea"
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
          <Button title="Eliminar" variant="outline" onPress={handleDelete} />
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

export default EditTaskScreen;

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
  saveButton: {
    marginBottom: spacing.md,
  },
});

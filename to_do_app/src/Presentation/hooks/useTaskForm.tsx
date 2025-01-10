import React, { useEffect, useState } from 'react'
import { Task } from '../../Domain/entities/Task'
import { useTaskViewModel } from '../viewmodels/useTaskViewModel';
import { useNavigationActions } from './useNabvigationActions';

export const useTaskForm = (task?: Task) => {
  const {removeItem, editItem, saveItem} = useTaskViewModel();
  const {goBack} = useNavigationActions();

  const [taskForm, setTaskForm] = useState(
    task || {
      userId: 0,
      id: 0,
      title: '',
      completed: 'pendiente',
    },
  );

  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (error !== '') setError('');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  const setTitle = (title: string) => setTaskForm({...taskForm, title});

  const setStatus = (status: string) => setTaskForm({...taskForm, completed: status.toLocaleLowerCase()});

  const save = () => {
    if (taskForm.title === '')
      return setError('Por favor introduce el nombre de la tarea.');

    if (!task) return saveItem({...taskForm} as Task);

    return editItem(taskForm as Task);
  };

  const dimiss = () => {
    if (!task) return goBack();

    return removeItem(task.id, task.title);
  };

  return {
    taskForm,
    setTitle,
    setStatus,
    error,
    save,
    dimiss,
  };
};

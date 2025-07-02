import { useEffect } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { api } from '../services/api';
import { useTaskStore } from '../state/useTaskStore';

type Task = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchTasks = async () => {
  const { data } = await api.get('/todos?_limit=50');
  return data;
};

export function useTasksQuery() {
  const setTasks = useTaskStore(state => state.setTasks);
  const tasks = useTaskStore(state => state.tasks);

  const query = useSuspenseQuery<Task[]>({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
    staleTime: 1000 * 60 * 60,
    retry: 1,
  });

  useEffect(() => {
    if (query.isSuccess && query.data) {
      setTasks(query.data);
    }
  }, [query.isSuccess, query.data, setTasks]);

  return { ...query, tasks };
}

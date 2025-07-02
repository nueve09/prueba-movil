import { create } from 'zustand';

export type Task = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TaskState = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Omit<Task, 'id'>) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
  reset: () => void;
};

export const useTaskStore = create<TaskState>(set => ({
  tasks: [],
  setTasks: tasks => set({ tasks }),
  addTask: task =>
    set(state => ({
      tasks: [{ ...task, id: Date.now() }, ...state.tasks],
    })),
  deleteTask: id =>
    set(state => ({ tasks: state.tasks.filter(t => t.id !== id) })),
  toggleTask: id =>
    set(state => ({
      tasks: state.tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    })),
  reset: () => set({ tasks: [] }),
}));

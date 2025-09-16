import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { create } from 'lodash';
import { createTodo, getTodos, moveTodo, removeTodo } from '~/services/todo';

export function useGetTodos() {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    select: (response) => response.data,
  });

  return {
    todos: data,
  };
}

export function useMoveTodo() {
  const queryClient = useQueryClient();

  const { mutate  } = useMutation({
    mutationFn: moveTodo,
    onSuccess: () => queryClient.invalidateQueries(),
  });

  return {
    move: mutate,
  };
}
export function useCreateTodo() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => queryClient.invalidateQueries(),
  });

  return {
    create: mutate,
    isLoading: isPending
  };
}

export function useRemoveTodo() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['removeTodo'],
    mutationFn: removeTodo,
    onSuccess: () => queryClient.invalidateQueries(),
  });

  return {
    remove: mutate,
  };
}

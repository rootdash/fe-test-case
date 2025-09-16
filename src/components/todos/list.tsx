'use client';

import {
  useDeferredValue,
  unstable_ViewTransition as ViewTransition,
} from 'react';
import { useGetTodos, useMoveTodo, useRemoveTodo } from '~/hooks/todo';
import { TodoCard } from './card';

export interface TodoListProps { }

export function TodoList(_: TodoListProps) {
  const { todos } = useGetTodos();
  const deferredTodos = useDeferredValue(todos);

  const { move } = useMoveTodo();
  const { remove } = useRemoveTodo();

  return (
    <div className="max-w-[500px] w-full p-2 space-y-2 border border-gray-100">
      {deferredTodos?.length === 0 ? (
        <div className="h-full flex items-center justify-center py-8">
          <p>🙏 Tidak ada todo</p>
        </div>
      ) : (
        deferredTodos?.map((todo) => (
          <ViewTransition key={todo.id}>
            <TodoCard
              {...todo}
              key={todo.id}
              /**
               * @todo: Fix this error for onTodoMove
               */
              onTodoMove={move}
              onTodoRemove={remove}
            />
          </ViewTransition>
        ))
      )}
    </div>
  );
}

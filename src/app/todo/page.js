'use client';

import AddTodo from './AddTodo';
import RemoveTodo from './RemoveTodo';
import EditTodo from './EditTodo';
import {useEffect, useState} from 'react';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [todos]);

  return (
    <>
      <AddTodo />
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-lg">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos &&
              todos.map((todo, idx) => (
                <tr className="hover" key={todo.id}>
                  <th>{idx + 1}</th>
                  <td>{todo.task}</td>
                  <td className="flex gap-2">
                    <EditTodo todo={todo} />
                    <RemoveTodo todo={todo} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

'use client';

import {useEffect, useState} from 'react';
import AddTodo from './AddTodo';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/api/todo')
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <AddTodo />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center p-3">
                  <span className="loading loading-spinner loading-lg"></span>
                </td>
              </tr>
            ) : (
              todos.map((todo, idx) => (
                <tr className="hover" key={todo.id}>
                  <th>{idx + 1}</th>
                  <td>{todo.task}</td>
                  <td className="flex gap-2">
                    <button type="button" className="btn btn-info btn-sm">
                      Edit
                    </button>
                    <button type="button" className="btn btn-error btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

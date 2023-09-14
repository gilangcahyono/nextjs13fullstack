import AddTodo from './AddTodo';
import RemoveTodo from './RemoveTodo';
import EditTodo from './EditTodo';
import prisma from '@/lib/prisma';

const getTodos = async () => {
  const res = await prisma.todo.findMany();
  return res;
};

export default async function Todo() {
  const todos = await getTodos();

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
            {todos.map((todo, idx) => (
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

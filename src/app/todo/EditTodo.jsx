import {useState} from 'react';

export default function EditTodo({todo}) {
  const [task, setTask] = useState(todo.task);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/todo/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        task: task,
      }),
    });
    setIsOpen(false);
    setTask('');
  };

  return (
    <>
      <button
        className="btn btn-warning btn-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        Edit
      </button>
      <dialog className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit {todo.task}</h3>
          <form className="py-2" onSubmit={handleSubmit}>
            <input
              autoFocus
              required
              type="text"
              name="task"
              value={task}
              placeholder="New task..."
              className="input input-bordered w-full"
              onChange={(e) => setTask(e.target.value)}
            />
            <div className="modal-action">
              <div className="flex gap-3">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

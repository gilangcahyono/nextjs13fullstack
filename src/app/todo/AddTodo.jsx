import {useState} from 'react';

export default function AddTodo() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({
        task: e.target.task.value,
      }),
    });
  };

  return (
    <>
      <button className="btn btn-primary" onClick={() => setIsOpen(!isOpen)}>
        open modal
      </button>
      <dialog
        id="addTodoModal"
        className={isOpen ? 'modal modal-open' : 'modal'}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Todo</h3>
          <form className="py-2" onSubmit={handleSubmit}>
            <input
              autoFocus
              type="text"
              name="task"
              placeholder="New task..."
              className="input input-bordered w-full"
            />
            <div className="modal-action">
              <div className="flex gap-3">
                <button type="submit" className="btn btn-primary">
                  Add
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

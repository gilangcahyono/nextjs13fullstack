import {useState} from 'react';

export default function RemoveTodo({todo}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleRemove = (id) => {
    fetch(`/api/todo/${id}`, {
      method: 'DELETE',
    });
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="btn btn-error btn-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        Delete
      </button>
      <dialog className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to delete {todo.task}
          </h3>

          <div className="modal-action">
            <div className="flex gap-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleRemove(todo.id)}
              >
                Yes
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
        </div>
      </dialog>
    </>
  );
}

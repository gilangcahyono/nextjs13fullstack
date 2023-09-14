'use client';

import {useRouter} from 'next/navigation';
import {useState} from 'react';

export default function RemoveTodo({todo}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleRemove = (id) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo/${id}`, {
      method: 'DELETE',
    });
    setIsOpen(false);
    router.refresh();
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

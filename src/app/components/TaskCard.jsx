"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TaskCard = ({ task }) => {
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleDelete = async (id) => {
    if (confirm("Would you delete this task?")) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/`,
        {
          method: "DELETE",
        }
      );
      if (res.status === 204) {
        router.refresh();
      }
    }
  };
  const handleTaskDone = async (id) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/done/`,
      {
        method: "POST",
      }
    );
    if (res.status === 200) {
      router.refresh();
    }
  };

  const handleUpdate = async (id) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/`,
      {
        method: "PUT",
        body: JSON.stringify({ title: newTitle, description: newDescription }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setNewTitle(data.title);
    setNewDescription(data.description);
    setEdit(false);
  };

  return (
    <div className="bg px-4 py-3 mb-2 rounded-md text-white flex justify-between items-center">
      <div className="flex flex-col">
        {!edit ? (
          <h2 className="font-bold">
            {newTitle}
            {task.done && <span>✅</span>}
          </h2>
        ) : (
          <input
            type="text"
            placeholder={task.title}
            className="p-2 bg border-none outline-none text-white"
            onChange={(e) => setNewTitle(e.target.value)}
          />
        )}
        {!edit ? (
          <p>{newDescription}</p>
        ) : (
          <textarea
            placeholder={task.description}
            className="p-2 bg border-none outline-none text-white w-full"
            rows={1}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        )}
      </div>
      <div className="flex justify-between gap-x-2">
        {edit && (
          <button
            className="bg-slate-300 hover:bg-slate-200 transition-colors p-2 rounded-md text-black"
            onClick={() => handleUpdate(task.id)}
          >
            Save changes
          </button>
        )}
        <button
          className={
            "text-white rounded-md p-2" +
            (task.done
              ? " bg-gray-800 hover:bg-gray-700 transition-colors"
              : " bg-green-500 hover:bg-green-400 transition-colors")
          }
          onClick={() => handleTaskDone(task.id)}
        >
          {task.done ? "Dismark" : "Mark"}
        </button>
        <button
          className="bg-red-500 hover:bg-red-400 transition-colors p-2 rounded-md text-white"
          onClick={() => handleDelete(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 transition-colors p-2 rounded-md text-white"
          onClick={() => setEdit(!edit)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

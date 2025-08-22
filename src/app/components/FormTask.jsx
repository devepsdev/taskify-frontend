"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`,
      {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    router.refresh();
  };

  return (
    <div className="bg p-7 h-fit">
      <form onSubmit={handleSubmit}>
        <h1 className="text-white font-bold text-xl">Add Task</h1>
        <label htmlFor="title" className="text-xs text-white">
          Title:
        </label>
        <input
          type="text"
          name="title"
          className="bg rounded-md p-2 w-full mb-2 block text-white"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description" className="text-xs text-white">
          Description:
        </label>
        <textarea
          name="description"
          className="bg rounded-md p-2 w-full mb-2 block text-white"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="bg-orange-500 hover:bg-orange-400 transition-colors text-white rounded-md p-2 block w-full">
          Save
        </button>
      </form>
    </div>
  );
};

export default FormTask;

import TaskCard from "./TaskCard";

const loadTasks = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/tasks/`);
  const tasks = await res.json();
  return tasks;
};

const ListTask = async () => {
  const tasks = await loadTasks();

  return (
    <div className="bg w-300 p-7 h-fit">
      <h1 className="text-white font-bold my-3 text-xl">Tasks List</h1>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;

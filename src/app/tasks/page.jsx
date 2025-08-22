import FormTask from "../components/FormTask";
import ListTask from "../components/ListTask";

const Tasks = () => {
  return (
    <div className="flex justify-center gap-x-10">
      <FormTask />
      <ListTask />
    </div>
  );
};

export default Tasks;

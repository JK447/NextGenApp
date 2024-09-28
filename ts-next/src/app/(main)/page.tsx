import { Task } from "@/app/api/tasks/route";

const Gettask = async () => {
  const response = await fetch("/api/tasks", { method: "GET" });
  return await response.json(); // response.json()の結果を返す
};

const page = async () => {
  const tasks = (await Gettask()).tasks as Task[]; // Gettask()の結果からtasksを取得
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
  );
};

export default page;

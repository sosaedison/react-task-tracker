import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6sth at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  // Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App container">
      <Header
        onAdd={() => setShowAddTasks(!showAddTasks)}
        title="Tracker of Tasks"
        showAdd={showAddTasks}
      />
      {showAddTasks && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks onDelete={deleteTask} onToggle={toggleReminder} tasks={tasks} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;

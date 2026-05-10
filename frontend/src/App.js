import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // FETCH TASKS
  const fetchTasks = async () => {

    try {

      const res = await axios.get("http://localhost:5000/tasks");

      setTasks(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  useEffect(() => {

    fetchTasks();

  }, []);

  // ADD TASK
  const addTask = async () => {

    if (task.trim() === "") return;

    try {

      await axios.post(
        "http://localhost:5000/tasks",
        {
          task: task
        }
      );

      setTask("");

      fetchTasks();

    } catch (err) {

      console.log(err);

    }
  };

  // DELETE TASK
  const deleteTask = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/tasks/${id}`
      );

      fetchTasks();

    } catch (err) {

      console.log(err);

    }
  };

  // TOGGLE COMPLETE
  const toggleTask = async (id) => {

    try {

      await axios.put(
        `http://localhost:5000/tasks/${id}`
      );

      fetchTasks();

    } catch (err) {

      console.log(err);

    }
  };

  return (

    <div className="app">

      <div className="container">

        <h1>DevOps Task Manager</h1>

        <div className="input-section">

          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask}>
            Add Task
          </button>

        </div>

        <div className="stats">

          <div className="card">

            <h2>{tasks.length}</h2>

            <p>Total Tasks</p>

          </div>

          <div className="card">

            <h2>
              {tasks.filter((t) => t.completed).length}
            </h2>

            <p>Completed</p>

          </div>

          <div className="card">

            <h2>
              {tasks.filter((t) => !t.completed).length}
            </h2>

            <p>Pending</p>

          </div>

        </div>

        <div className="task-list">

          {tasks.map((t) => (

            <div
              className="task-card"
              key={t._id}
            >

              <div className="task-info">

                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTask(t._id)}
                />

                <div>

                  <h3
                    style={{
                      textDecoration:
                        t.completed
                          ? "line-through"
                          : "none"
                    }}
                  >
                    {t.task}
                  </h3>

                  <p>
                    {t.completed
                      ? "Completed"
                      : "Pending"}
                  </p>

                </div>

              </div>

              <button
                className="delete-btn"
                onClick={() => deleteTask(t._id)}
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default App;
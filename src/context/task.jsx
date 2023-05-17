import { createContext } from "react";
import axios from 'axios'
import { useState } from 'react'

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([])


  const createTask = async (title, taskDesc) => {

    const response = await axios.post('http://localhost:3004/tasks', {
      title,
      taskDesc
    })
    const createdTask = [...tasks, response.data];
    setTasks(createdTask);
  }

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3004/tasks')
    setTasks(response.data)
  }


  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3004/tasks/${id}`)
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeletingTasks);
  }

  const editTaskById = async (id, upatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3004/tasks/${id}`, {
      title: upatedTitle,
      taskDesc: updatedTaskDesc
    })
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: upatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    deleteTaskById,
    editTaskById

  }

  return (
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  )
}

export { Provider }
export default TasksContext;
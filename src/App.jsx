import { useEffect, useContext } from 'react'
import './App.css'
import TaskCreate from './component/TaskCreate'
import TaskList from './component/TaskList'
import TasksContext from './context/task'
function App() {
  const {fetchTasks} = useContext(TasksContext);

  useEffect(() => {
    fetchTasks();
  }, [])

  return (
    <div className='main'>
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  )
}

export default App

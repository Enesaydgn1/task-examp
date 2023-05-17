import React from 'react'
import { useState, useContext } from 'react'
import TasksContext from '../context/task'

function TaskCreate({ task, taskformUpdate, onUpdate }) {
  const { createTask } = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : '')
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '')


  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc)
    }
    else {
      createTask(title, taskDesc);
    }
    setTitle('');
    setTaskDesc('');
  }

  return (
    <div>{taskformUpdate ?
      <div className='task-update'>
        <h3>Lütfen Taskı Düzenleyiniz!</h3>
        <form className='task-form'>
          <label>Başlığı Düzenleyiniz</label>
          <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" />
          <label>Taskı Düzenleyiniz</label>
          <textarea value={taskDesc} onChange={(event) => setTaskDesc(event.target.value)} rows={5} />
          <button className='update-button' onClick={handleSubmit}>Güncelle</button>
        </form>
      </div> : <div className='task-header'>
        <h3>Lütfen Task Ekleyiniz!</h3>
        <form className='task-form'>
          <label>Başlık</label>
          <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" />
          <label>Task Giriniz</label>
          <textarea value={taskDesc} onChange={(event) => setTaskDesc(event.target.value)} rows={5} />
          <button onClick={handleSubmit}>Oluştur</button>
        </form>
      </div>}</div>

  )
}

export default TaskCreate
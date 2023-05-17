import React, { useState , useContext} from 'react'
import TaskCreate from './TaskCreate';
import TasksContext from '../context/task'
function TaskShow({task}) {

  const {deleteTaskById , editTaskById} = useContext(TasksContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
      deleteTaskById(task.id)
  }

  const handleEditClick = () => {
      setShowEdit(!showEdit);
  }
  const handleSubmit = (id,upatedTitle,updatedTaskDesc) => {
      setShowEdit(false);
      editTaskById(id,upatedTitle,updatedTaskDesc)
  }

  return (
    <div className='task-show'>
      {showEdit ? 
      (<TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />)
      : 
      (
        <div>

          <h3>Göreviniz</h3>
          <p>{task.title}</p>
          <h3>Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
              <button onClick={handleDeleteClick}>Sil</button>
              <button onClick={handleEditClick}>Güncelle</button>
          </div>
         </div>
      )}

      
      
    </div>
  )
}

export default TaskShow
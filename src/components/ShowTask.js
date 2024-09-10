
export const ShowTask = ({taskList, setTaskList, task, setTask}) => {

  const handleDelete = (taskId) => {
    setTaskList(taskList.filter((task) => task.id !== taskId))
  }

  const handleEdit = (taskId) => {
    setTask(taskList.find((task) => task.id === taskId))
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
      </div>
      <ul>
        {taskList && taskList.map((task) => {
          return (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
            <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
          </li>
        )})}
      </ul>
    </section>
  )
}

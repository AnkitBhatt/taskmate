
export const AddTask = ({taskList, setTaskList, task, setTask}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const date = new Date()
    if(task.id){
      setTaskList(taskList.map((todo) => (
        todo.id === task.id ? {
          ...todo,
          name: e.target.task.value
        } : todo
      )))
    }
    else{
      const newTask = {
        id: date.getTime(), 
        name: e.target.task.value, 
        time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTaskList([...taskList, newTask])
    }
    setTask({})
  }
  
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" autoComplete="off" placeholder="Add Task" maxLength="25" value={task.name || ""} onChange={e => setTask({...task, name:e.target.value})}/>
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  )
}

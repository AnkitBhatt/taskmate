import { useState, useRef } from "react"
import "./AddTask.css"

export const AddTask = ({tasks, setTasks}) => {
  // const [taskValue, setTaskValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const taskRef = useRef("")

  const handleChange = (event) => {
    // setTaskValue(event.target.value);
    console.log(taskRef.current.value)
  }

  const handleReset = () => {
    // setTaskValue("");
    setIsCompleted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: "abc",
      completed: isCompleted
    }
    setTasks([...tasks,task])
    handleReset()
  }

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="task" id="task" placeholder="Task Name" autoComplete="false" ref={taskRef}/>
        <select onChange={() => setIsCompleted(!isCompleted)} value={isCompleted}>
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>
        <span onClick={handleReset} className="reset">Reset</span>
        <button type="submit">Add Task</button>
      </form>
      <p></p>
    </section>
  )
}

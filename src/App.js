import { useState } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';
import './App.css'

export default function App() {

  const info = "Info Prop Drilling"
  const [tasks, setTasks] = useState([]);

  return (
    <div className='App'>
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList info={info} title="Task List" tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  )
}

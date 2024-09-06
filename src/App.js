
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import './App.css'

export default function App() {

  const info = "Info Prop Drilling"

  return (
    <div className='App'>
      <Header />
      <TaskList info={info} title="Task List"/>
      <Footer />
    </div>
  )
}

import { useState } from 'react'
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TaskList = ({title, info}) => {
  const [tasks, setTasks] = useState([
    {id:5271, name:"Start Learning React", completed:true},
    {id:7825, name:"Practise side by side", completed:false},
    {id:8391, name:"Comment after each video", completed:false}
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id){
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <h1>{title}</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>Toggle</button>
        {show && tasks.map((task) => (
          <TaskCard info={info} key={task.id} task={task} handleDelete={handleDelete}/>
        ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores et deleniti repellendus porro sint dolores, reiciendis id ab minima. Molestiae, eveniet ratione. Fugiat accusamus voluptatem beatae facere qui nulla libero.</p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Lorem, ipsum.</p>
        <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores et deleniti repellendus porro sint dolores, reiciendis id ab minima. Molestiae, eveniet ratione. Fugiat accusamus voluptatem beatae facere qui nulla libero.</p>
      </BoxCard>
      <BoxCard result="alert">
        <p className="title">Lorem, ipsum dolor.</p>
        <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores et deleniti repellendus porro sint dolores, reiciendis id ab minima. Molestiae, eveniet ratione. Fugiat accusamus voluptatem beatae facere qui nulla libero.</p>
      </BoxCard>
    </>
  )
}

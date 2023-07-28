import React,{useContext} from 'react'
import { TaskContext } from './Todo'


function Card() {
  const task =useContext(TaskContext)
  
  return (
    task.tasks.map((ele,ind,arr)=>{
      return <div className='card' key={ind}>
        <p id='card-title'>{ind+1}.{ele.data}</p>
        <p id='card-status'>Status:{ele.status}</p>
        <button
          onClick={()=>{
          const newArray = [...arr];
          if(newArray[newArray.indexOf(ele)].status==="completed"){
            newArray[newArray.indexOf(ele)].status="pending";
          }
          else{
            newArray[newArray.indexOf(ele)].status="completed";
          }
          task.setTask(newArray);
        }}
        >
        Update Status
        </button>
        <button
         onClick={()=>{
          if(arr.length===1){
            task.setTask([]);
            return
          }
          else
            task.setTask(task.tasks.splice(arr.indexOf(ele),1))
        }}
        >Remove</button>
      </div>
    })
  )
}

export default Card
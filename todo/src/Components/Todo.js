import React, { useState } from 'react'
import Card from './Card.js'
export const TaskContext = React.createContext();

function Todo() {
const [tasks,setTask] = useState([])
const [inputData,setInputData] = useState({data:"Task",status:"Status"}); 
return (
    <>
      <div className='header'>
          <input type='text' className='input-box'
            onChange={(e)=>{
              setInputData({
                data:e.target.value,
                status:"pending"
              })
            }}
          />
          <button 
          onClick={()=>{
            setTask([...tasks,inputData])
          }}
          >add</button>
      </div>
     
      <div className='hero-section'>
          <TaskContext.Provider value={{tasks,setTask}}>
            <Card/>
          </TaskContext.Provider>
      </div>
     
    </>
  )
}

export default Todo
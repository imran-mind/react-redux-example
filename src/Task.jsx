import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';

function Task() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const addNewTask = ()=>{
    if(input){
        dispatch(addTodo(input));
    }
  }
  return (
    <div className='task-component'>
        <div className='add-task'>
            <input
                type='text'
                placeholder='Add a Task'
                value={input}
                onChange={(e)=> setInput(e.target.value)}
            />
            <button onClick={addNewTask}>Add Task</button>
        </div>
    </div>
  )
}

export default Task
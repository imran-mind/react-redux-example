import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Task'
import TaskList from './TaskList'

function App() {
  return (
    <>
      <Task/>
      <TaskList/>
    </>
  )
}

export default App

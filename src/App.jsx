import { useState } from 'react'
import './App.css'

function App() {
  const [board, setBoard] = useState({
    toDo:{
      name: 'toDo',
      items: [
        {id: 1, content: "Suck cock"},
        {id: 2, content: "Скушать мороженное"},
      ]
    },
    inProgress:{
      name: 'inProgress',
      items: [
        {id: 3, content: "Поспать"},
      ]
    },
    done:{
      name: 'done',
      items: [
        {id: 4, content: "Скушать кфс"},
      ]
    },
  });

  const [newTask, setNewTask] = useState('');

  const [activeColumn, setActiveColumn] = useState('toDo');

  const [draggedItem, setDraggedItem] = useState(null);

  const [taskId, setTaskId] = useState(5);

  const addNewTask = () => {
    if (newTask === '') {
      return;
    }

    const updatedBoard = {...board};

    updatedBoard[activeColumn].items.push({
      id: taskId,
      content: newTask,
    });

    setTaskId(taskId + 1);

    setBoard(updatedBoard);
    setNewTask('');
  };

  const removeTask = (taskId, columnId) => {
    const updatedBoard = {...board};

    updatedBoard[columnId].items = updatedBoard[columnId].items.filter((item) => item.id !== taskId);
    setBoard(updatedBoard);
  };

  return (
    <>
      <div>

      </div>
    </>
  )
}

export default App

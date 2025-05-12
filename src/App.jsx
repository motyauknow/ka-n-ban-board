import { useState } from 'react'
import './App.css'

function App() {
  const [boards, setBoards] = useState({
    toDo: {
      name: 'Надо сделать',
      items: [
        { id: 1, content: "Suck cock" },
        { id: 2, content: "Скушать мороженное" },
      ]
    },
    inProgress: {
      name: 'В процессе',
      items: [
        { id: 3, content: "Поспать" },
      ]
    },
    done: {
      name: 'Сделано!',
      items: [
        { id: 4, content: "Скушать кфс" },
      ]
    },
  });

  const [newTask, setNewTask] = useState('');
  const [activeColumn, setActiveColumn] = useState('toDo');
  const [taskId, setTaskId] = useState(5);

  const addNewTask = () => {
    if (newTask === '') {
      return;
    }

    const updatedBoards = { ...boards };

    updatedBoards[activeColumn].items.push({
      id: taskId,
      content: newTask,
    });

    setTaskId(taskId + 1);
    setBoards(updatedBoards);
    setNewTask('');
  };

  const removeTask = (taskId, columnId) => {
    const updatedBoards = { ...boards };
    updatedBoards[columnId].items = updatedBoards[columnId].items.filter((item) => item.id !== taskId);
    setBoards(updatedBoards);
  };

  return (
    <>
      <div className='board_container'>
        <div className='board_content'>
          <h1 className='title'>Ka(n)ban Board</h1>
          <div className="input_container">
            <input 
              type="text" 
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder='Введите новую задачу'
              onKeyDown={(e) => e.key === 'Enter' && addNewTask()}
              className='input_element'
            />

            <select 
              value={activeColumn}
              onChange={(e) => setActiveColumn(e.target.value)}
              className='task_selector'
            >
              {Object.keys(boards).map((columnId) => (
                <option value={columnId} key={columnId}>
                  {boards[columnId].name}
                </option>
              ))}
            </select>

            <button onClick={addNewTask} className='add_button'>Добавить</button>
          </div>

          <div className='columns_container'>
            {Object.keys(boards).map((columnId) => (
              <div key={columnId} className='column'>
                <h2>{boards[columnId].name}</h2>
                <div className='tasks_list'>
                  {boards[columnId].items.map((item) => (
                    <div key={item.id} className='task_item'>
                      {item.content}
                      <button 
                        onClick={() => removeTask(item.id, columnId)}
                        className='remove_button'
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App

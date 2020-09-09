import React, { useState, useEffect } from 'react';
import TaskTable from './components/TaskTable';

const App = () => {
  const [data, setData] = useState([])
  const [users, setUsers] = useState([])

  const fetchDataFromAPI = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const result = await response.json()
    setData(result)
    setUsers([...new Set(result.map(item => item.userId))])
  }

  useEffect(() => {
    fetchDataFromAPI();
  }, [''])

  return (
    <div align='center'>
      <h1>
        <span className='title_1'>&lt;Users&gt;</span>
        <span className='title_2'>Tasks</span>
      </h1>
      {/* TABLE with RECORDS By Users */}
      {(users.length > 1) ?
        users.map((userId) => {
          {/* Filter data by user */ }
          const userTask = data.filter(item => item.userId === userId)
          return <TaskTable key={userId} data={userTask} id={userId} />
        })
        :
        <h2>...No users found...</h2>
      }

    </div>
  );
}

export default App;

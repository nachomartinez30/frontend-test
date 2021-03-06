import React, { Fragment, useEffect, useState } from 'react'
import Tasks from './Tasks'

const TaskTable = ({ data, id }) => {

    const [state, setState] = useState(data)
    
    const [completedTask, setCompletedTask] = useState([])
    const [noCompletedTasks, setNoCompletedTasks] = useState([])

    useEffect(() => {
        // FILTER COMPLETED AND NO COMPLETED TASKS
        setCompletedTask(state.filter(item => item.completed === true))
        setNoCompletedTasks(state.filter(item => item.completed === false))
    }, [state])

    const toggleCompleteStatus = (id) => {
        /* get object with id */
        const indexSelected = state.findIndex((item) => item.id === id)
       
        
        const newData = [...state]
        /* get objet to change value */
        newData[indexSelected] = {
            ...state[indexSelected],
            completed: !state[indexSelected].completed
        }

        /* set the value to global state */
        setState(newData)
        /* change status */
    }

    return (
        <Fragment>
            <h2>User {id} tasks:</h2>
            <div>
                <table>
                    <tr>
                        <td>STATUS</td>
                        <td>TITLE</td>
                        <td>TASK ID</td>
                        <td>Actions</td>
                    </tr>
                    {/* NO COMPLETED TASKS */}
                    <Tasks
                        data={noCompletedTasks}
                        handleClick={toggleCompleteStatus}
                    />
                    {/* COMPLETED TASK */}
                    <Tasks
                        completed
                        data={completedTask}
                        handleClick={toggleCompleteStatus}
                    />
                </table>
            </div>
        </Fragment>
    );
}

export default TaskTable;
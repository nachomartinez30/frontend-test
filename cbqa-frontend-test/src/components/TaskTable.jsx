import React, { Fragment, useEffect, useState } from 'react'
import Tasks from './Tasks'

const TaskTable = ({ data, id }) => {

    const [state, setState] = useState(data)
    const [refresh, setRefresh] = useState(true)
    const [completedTask, setCompletedTask] = useState([])
    const [noCompletedTasks, setNoCompletedTasks] = useState([])

    useEffect(() => {
        // FILTER COMPLETED AND NO COMPLETED TASKS
        setCompletedTask(state.filter(item => item.completed === true))
        setNoCompletedTasks(state.filter(item => item.completed === false))
        setRefresh(false)
    }, [refresh])

    const toggleCompleteStatus = (id) => {
        /* get object with id */
        const indexSelected = state.findIndex((item) => item.id === id)
        const newData = [...state]
        newData[indexSelected] = {
            ...state[indexSelected],
            completed: !state[indexSelected].completed
        }
        setState(newData)
        setRefresh(true)
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
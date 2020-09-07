import React, { Fragment, useEffect, useState } from 'react'
import Tasks from './Tasks'

const TaskTable = ({ data, id }) => {
    const [completedTask, setCompletedTask] = useState([])
    const [noCompletedTasks, setNoCompletedTasks] = useState([])

    useEffect(() => {
        // FILTER COMPLETED AND NO COMPLETED TASKS
        setCompletedTask(data.filter(item => item.completed === true))
        setNoCompletedTasks(data.filter(item => item.completed === false))
    }, [''])

    return (
        <Fragment>
            <h1>User {id} tasks:</h1>
            <table>
                <tr>
                    <th>STATUS</th>
                    <td>TITLE</td>
                </tr>
                {/* NO COMPLETED TASKS */}
                <Tasks
                    data={noCompletedTasks}
                />
                {/* COMPLETED TASK */}
                <Tasks
                    completed
                    data={completedTask}
                />
            </table>
        </Fragment>
    );
}

export default TaskTable;
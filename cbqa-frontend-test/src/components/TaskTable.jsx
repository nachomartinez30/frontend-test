import React, { Fragment, useEffect, useState } from 'react'
import Tasks from './Tasks'

const TaskTable = ({ data, id }) => {
    const [completedTask, setCompletedTask] = useState([])
    const [noCompletedTasks, setNoCompletedTasks] = useState([])

    useEffect(() => {
        // FILTER COMPLETED AND NO COMPLETED TASKS
        setCompletedTask(data.filter(item => item.completed === true))
        setNoCompletedTasks(data.filter(item => item.completed === false))
    }, [data])

    const toggleCompleteStatus = (id) => {

        /* get object with id */
        const result = completedTask.findIndex(item => {
            if (item.uiserid === id) {
                console.log(item);
            }
        })


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
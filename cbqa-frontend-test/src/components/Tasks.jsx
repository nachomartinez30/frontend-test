import React, { Fragment } from 'react'

const Tasks = ({ data, completed, handleClick }) => {

 

    return (
        <Fragment>
            <tr className={(completed) ? 'completed-task' : 'incompleted-task'}>
                <th rowspan={data.length + 1}>
                    {(completed) ? 'COMPLETED' : 'NO COMPLETED'}
                </th>
                {(data.length <= 0) ? <td>No TODOS</td> : null}
            </tr>
            {
                data && data.map(item =>
                    <tr className={(completed) ? 'completed-task' : 'incompleted-task'}>
                        <td>{item.title}</td>
                        <td>{item.id}</td>
                        <td>
                            <button className={(completed) ? 'btn_incomplete' : 'btn_complete'}
                                onClick={()=>handleClick(item.id)}
                            >
                                {(completed) ? 'Set incomplete' : 'Set complete'}
                            </button>
                        </td>
                    </tr>
                )
            }
        </Fragment>
    );
}

export default Tasks;
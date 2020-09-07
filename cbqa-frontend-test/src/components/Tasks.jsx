import React, { Fragment } from 'react'

const Tasks = ({ data, completed }) => {
    return (
        <Fragment>
            <tr>
                <th rowspan={data.length + 1}>{(completed) ? 'Completed' : 'No Completed'}</th>
                {(data.length <= 0) ? <td>No TODOS</td> : null}
            </tr>
            {
                data && data.map(item =>
                    <tr>
                        <td>{item.title}</td>
                    </tr>
                )
            }
        </Fragment>
    );
}

export default Tasks;
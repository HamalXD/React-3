import React from 'react'

// const DisplayList = ({data, value}) => {
//     return (
//             <li>{value} {data}</li>
//     )
// }

const Display = ({users}) => {
    return (
        <>
         <ul>
            {users ? (
                <li>{users}</li>
            ): (
                <li>Not Authorized</li>
            )}
         </ul>
        </>
    )
}

export default Display;

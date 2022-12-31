import React from 'react'
import Display from './ListDisplay';

const Authorized = () => {
    const users= [{id: '1', name: 'Name 1', isAuthorized: true},
                 {id: '2', name: 'Name 2', isAuthorized: true},
                 {id: '3', name: 'Name 3', isAuthorized:false},
                 {id: '4', name: 'Name 4', isAuthorized: true}
    ];
  return (
    <>
        <ul>
            {users.map((user) => (
            <Display
            names={users.name} 
            key={users.id} 
            authorized={users.isAuthorized}/>))}
        </ul>
    </>
  )
}

export default Authorized;

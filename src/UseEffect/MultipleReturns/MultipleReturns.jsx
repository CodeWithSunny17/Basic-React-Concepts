import React, { useEffect, useState } from 'react'

export default function MultipleReturns() {
    const [users, setUsers] =useState([])
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchUsers(){
            try {
                const response = await fetch('https://api.github.com/users');
                const data = await response.json();
                setTimeout(() => {
                    setUsers(data);
                }, 1000);
                
                setIsloading(false);

            } catch (error) {
                setError(error)
                setIsloading(false)
            }
        }

        fetchUsers();

    })

    if(isLoading){
        return <p>loading...</p>
    }
    if(error){
        return <p>error: {error.message}</p>
    }

  return (
    <div>
      {/* <h1>Users List</h1> */}
      {users.map(u => {
        return <li key={u.id}>
            <a href={u.html_url}>{u.login}</a>
          </li>
      })}
    </div>
  )
}

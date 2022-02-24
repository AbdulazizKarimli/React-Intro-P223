import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UserComponent } from './UserComponent';



export const FetchData = (props) => {
    const [users, setUsers] = useState([]);
    const [status , setStatus] = useState(false)
    const [newUser, setNewUser] = useState({name:''})

    
    const userNameChange = (e) => {
        setNewUser({...newUser, name: e.target.value})
    }

    const getUserData = async () => {
        try {
            setStatus(true)
            const response = await axios.get('https://62175fc071e7672e537c5428.mockapi.io/users')
            setUsers(response.data)
            setStatus(false)
        } catch (error) {
            setStatus(false)
            console.log(error)            
        }
    }


    

    useEffect(() => {
        getUserData()  
    }, [])


    const submitUser = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://62175fc071e7672e537c5428.mockapi.io/users', newUser)
            console.log(response.data)
            setNewUser({name:''})
            setUsers([response.data , ...users ])
        } catch (error) {
            console.log(error)
        }
    }
    

    const changeUserName = (id, newName) => {
        const newUsers = users.map(user => {
            if(user.id === id){
                user.name = newName
            }
            return user
        })
        setUsers(newUsers)
    }

    return (
        <div>
            <form onSubmit={submitUser}>
                <input value={newUser.name} onChange={userNameChange}  type="text" placeholder="username" /><button type='submit' >Add</button>
            </form>
            {status ? <h2>Loading</h2> : <h2>Loaded</h2>}
            {
                users.map(user => (
                    <UserComponent key={user.id} user={user} userData={{user , users , setUsers, changeUserName}}/> 
                )
            )}
        </div>
    );
}

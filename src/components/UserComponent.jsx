import axios from 'axios'
import React, { useState } from 'react'



export const UserComponent = (props) => {
    const {userData:{user , users , setUsers , changeUserName}} = props
    const [status , setStatus] = useState(false)

    const deleteUser = async (id) => {
        try
        {
            setStatus(true)
            const response = await axios.delete(`https://62175fc071e7672e537c5428.mockapi.io/users/${id}`)
            setUsers(users.filter(user => user.id !== id))
            setStatus(false)
        }
        catch(error){
            console.log(error)
            setStatus(false)
        }
    }

    const saveUser = async (id , user) => {
        try {
            setStatus(true)
            const response  = await axios.put(`https://62175fc071e7672e537c5428.mockapi.io/users/${id}`, user)
            console.log(response.data)
            setStatus(false)
        } catch (error) {
            setStatus(false)
            console.log(error)
        }
    }


    return (
        <div key={user.id} className='userStyle'>
            <input type='text' value={user.name} onChange={(e) => changeUserName(user.id , e.target.value)} />
            <button onClick={() => saveUser(user.id,user)}>save</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            {status && <div>Loading...</div>}
        </div>
    )

}
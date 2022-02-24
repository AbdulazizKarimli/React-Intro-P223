import React, { useEffect, useState } from 'react'
import { CounterComponent } from './CounterComponent'


export const TodoListComponent = () => {
    const [carName , setCarName] = useState('')
    const [cars , setCars] = useState([])
    
  
  
  
    useEffect(()=>{
      if(localStorage.getItem('cars')){
        setCars(JSON.parse(localStorage.getItem('cars')))
      }
    } , [])
    
    useEffect(()=>{
      localStorage.setItem('cars' , JSON.stringify(cars))
    } , [cars])
  
    // #region
    const removeCar = (id) => {
      let temp_cars = cars.filter((element) => element.id !== id) 
      setCars(temp_cars)
    }
  
    const submitToList = (e) => {
      e.preventDefault()
      let temp_array = [...cars , {name:carName , id: new Date().getTime()}]
      setCars(temp_array)
      setCarName('')
    }
    //#region Obj State
    const [person, setPerson] = useState(
      {
        name:'John', 
        surname:'Doe' , 
        city:{
          name:'Baku',
          la:23,
          ll:24
        }
      }
    )
  
    const changeName = () => {
      setPerson({...person , city:{...person.city , name:"Istanbul"}})
    }
    //#endregion Obj State
  
    //#region State
    const [toggle,setToggle] = useState(false)
    const [count, setCount] = useState(1)
  
    const increaseCount = () => {
      setCount(count+1)
    }
  
    const decreaseCount = () => {
      if(count > 0){
        setCount(count -1)
      }
    }
  
    const set10 = () => {
      setCount(10)
    }
  
    const counterObj = {
      count:count,
    }
    //#endregion State
  
    // const test_array = [1,2,3,4,5,6,7,8,9]
    // test_array.filter((element) => element %2 ===0)
  
    
    //#endregion
  
    return (
        <div>
            <form onSubmit={submitToList}>
                <input type='text' value={carName}  onChange={(event) => setCarName(event.target.value)} />
                <button type='submit'>Add To List</button>
            </form>

            <ul style={{marginTop:'100px'}}>
                {
                cars.map((element) => 
                    <li key={element.id} >
                    {element.name}
                    <button onClick={() => removeCar(element.id)}>Remove</button>
                    </li>
                )
                }
            </ul>
            {JSON.stringify(person)}
            <button onClick={changeName}> changeName</button>


            {
                toggle 
                ? 
                <CounterComponent counterObj={counterObj} count={count}  increaseCount={increaseCount} decreaseCount={decreaseCount} set10={set10}/> 
                : 
                "Not Toggled"
            } 
            <button onClick={() => setToggle(!toggle)}>Change Toggle</button>
      

            {JSON.stringify(person)}

      </div>
    )
}
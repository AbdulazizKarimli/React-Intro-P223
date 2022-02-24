import React , { createContext, useContext, useState} from 'react';

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }



    return (
        <GlobalContext.Provider value={{count , increaseCount, decreaseCount}}>
            {props.children}
        </GlobalContext.Provider>
    );
}

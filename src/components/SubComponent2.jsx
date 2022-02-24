import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalProvider';

export const SubComponent2 = (props) => {
    const {increaseCount , decreaseCount} = useContext(GlobalContext)


    return (
        <div>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>
    );
}

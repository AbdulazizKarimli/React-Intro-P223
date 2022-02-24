import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalProvider';
import { SubComponent2 } from './SubComponent2';

export const SubComponent = (props) => {
    const {count} = useContext(GlobalContext)

    return (
        <div>
            {count}
            <SubComponent2 />

        </div>
    );
}

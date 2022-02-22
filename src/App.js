import logo from './logo.svg';
import './assets/styles/App.css';
import { FirstComponent } from './components/FirstComponent';
import { useEffect, useState } from 'react';
import {SecondComponent} from './components/SecondComponent'
import {ThirdComponent} from './components/ThirdComponent'
import { CardComponent } from './components/CardComponent';
import mylogo from './assets/images/myimage.jpg'

export const RootApp = () => {
  const [state1 , setState1] = useState('data1')
  
  
  return (
    <div className="App" >
      {state1}
      <img alt="test" src={mylogo} />
      <img alt='randomimage' src='https://picsum.photos/200/300' />
      <CardComponent text={state1}/>
      {/* <FirstComponent text={state1}/> */}
      {/* <SecondComponent/> */}
      {/* <ThirdComponent/> */}
    </div>
  );
}


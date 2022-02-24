import logo from './logo.svg';
import './assets/styles/App.css';
import { useEffect, useState } from 'react';
import { SubComponent } from './components/SubComponent';
import { SubComponent2 } from './components/SubComponent2';
import { GlobalProvider } from './context/GlobalProvider';
import { FetchData } from './components/FetchData';

export const RootApp = () => {

  const [count, setCount] = useState(0);

  return (
      <GlobalProvider>
        <div className="App" >
          <FetchData/>
          {/* <SubComponent count={count}/> */}
        </div>
      </GlobalProvider>
  );
}


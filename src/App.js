import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Login from './components/Login/Login';
import { useFacebookValue } from './Context/context';

function App() {
  const [{ user }, dispatch] = useFacebookValue();
  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='facebook-body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>  
      )}
    </div>
  );
}

export default App;

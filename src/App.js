import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Maincon from './components/MainContent';
// import SignIn from './Pages/Register';
import Login from './Pages/Login';
import Footerp from './components/Footer';
import Footerlast from './components/Lastfooter';
import './App.css';


function App() {
  return (
    <div>
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Maincon/>}/>
      <Route path='/Loginp' element={<Login/>}/>
    </Routes>
</BrowserRouter>
  <Footerp/>
  <Footerlast/>

    </div>
  );
}

export default App;

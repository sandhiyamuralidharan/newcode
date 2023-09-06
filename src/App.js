//import logo from './logo.svg';
//import { createContext, useState } from 'react';
import './App.css';
import List1 from './router/List1';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './router/Login';
import Home1 from './router/Home1';
import Header from './router/Header';
import Footer from './router/Footer';
import Error from './router/Error';
function App() {
  
  return (
    <div className='App'>
      
<Router>
  <Header/>
  <Routes>
  <Route path="/" element={ <Home1/>}></Route>
    <Route path="/List1" element={<List1/> }></Route>
    <Route path="/Login" element={ <Login/>}></Route>
    <Route path="/Home1/:name" element={<Home1/>}></Route>
    <Route path="*" element={<Error/>}></Route>
  </Routes>
  <Footer/>
</Router>

      </div>
  );
}

export default App;

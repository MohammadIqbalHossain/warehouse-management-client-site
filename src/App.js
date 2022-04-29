import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/banner' element={<Banner />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;

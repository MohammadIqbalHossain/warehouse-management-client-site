
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Inventory from './components/Inventory/Inventory';
import BookDetails from './components/BookDetails/BookDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/banner' element={
          <RequireAuth>
            <Banner />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/details/:bookId' element={
          <RequireAuth>
            <BookDetails />
          </RequireAuth>
        }></Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

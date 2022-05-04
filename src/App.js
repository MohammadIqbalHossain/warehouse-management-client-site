
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
import ManageInventories from './components/ManageInventories/ManageInventories';
import AddBooksInventory from './components/AddBooksInventory/AddBooksInventory';
import MyInventories from './components/MyInventories/MyInventories';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/manage-inventories' element={<ManageInventories />}></Route>
        <Route path='/add-books-inventory' element={<AddBooksInventory />}></Route>
        <Route path='/my-inventories' element={<MyInventories />}></Route>
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

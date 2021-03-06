
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
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>

        <Route path='/manage-inventories' element={
          <RequireAuth>
            <ManageInventories />
          </RequireAuth>
        }></Route>

        <Route path='/add-books-inventory' element={
          <RequireAuth>
            <AddBooksInventory />
          </RequireAuth>
        }></Route>
        
        <Route path='/my-inventories' element={
          <RequireAuth>
            <MyInventories />
          </RequireAuth>
        }></Route>
    
        <Route path='/details/:bookId' element={
          <RequireAuth>
            <BookDetails />
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import NavigationBar from "./components/NavigationBar";
import BookList from "./components/Booklist";
import AppAppBar from "./components/AppAppBar";
import CollapsibleTable from "./components/CollapsableTable";
import Home from "./components/Home";
import Book from "./components/Book";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import SignInSide from "./components/SignInSide";
import SignUp from "./components/SignUp";
import UpdateBook from "./components/UpdateBook";

function App() {
  return (
      <div>
          <Router>
              <AppAppBar/>
              <Routes>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/update" element={<UpdateBook/>}/>
                  <Route path='/admin' element={<BookList/>}/>
                  <Route path="/books" element={<CollapsibleTable/>}/>
                  <Route path="/checkout" element={<Checkout/>}/>
                  <Route path="/signin" element={<SignInSide/>}/>
                  <Route path="/signup" element={<SignUp/>}/>
              </Routes>
          </Router>
          <div>
              <Footer/>
          </div>


      </div>
  );
}

export default App;

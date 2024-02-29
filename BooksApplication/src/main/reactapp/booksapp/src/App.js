import logo from './logo.svg';
import './App.css';
import Book from "./components/Book";
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import NavigationBar from "./components/NavigationBar";
import BookList from "./components/Booklist";
import AppAppBar from "./components/AppAppBar";
import CollapsibleTable from "./components/CollapsableTable";
import Home from "./components/Home";
function App() {
  return (
        <Router>
            <AppAppBar/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path='/edit/:id' exact component={<Book/>}/>
                    <Route path="/educational" element={<CollapsibleTable/>}/>
                </Routes>
        </Router>
  );
}

export default App;

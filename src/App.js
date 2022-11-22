import logo from './logo.svg';
import './App.css';
import Data from './components/List';
import Body from './components/Body';
import Navbar from './components/Navbar';
import { Route, Switch, Routes } from 'react-router-dom';

import { BrowserRouter as Router, useParams } from 'react-router-dom';
import List from "./components/List"
import List2 from './components/List2';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Router>  <Navbar />

        <Routes>




          <Route path='/' element={< Body />} />

          <Route path='/record1' element={< List />} />
          <Route path='/record2' element={< List2 />} />
          <Route path='/Login' element={< Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;

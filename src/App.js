import logo from './logo.svg';
import './App.css';
import Data from './components/List';
import Body from './components/Body';
import Navbar from './components/Navbar';
import { Route, Switch, Routes } from 'react-router-dom';

import { BrowserRouter as Router, useParams } from 'react-router-dom';
import List from "./components/List"

function App() {
  return (
    <div>
      <Router>  <Navbar />

        <Routes>




          <Route path='/' element={< Body />} />

          <Route path='/records' element={< List />} />


        </Routes>
      </Router>
    </div >
  );
}

export default App;

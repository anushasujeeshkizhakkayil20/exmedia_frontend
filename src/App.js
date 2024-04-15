import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pagess/Home';
import Dashboard from './pagess/Dashboard';
import Footer from './component/Footer';
import Contact from './pagess/Contact';
import Headers from './component/Headers';
import Authe from './component/Authe';

function App() {
  return (
    <div >
      <Headers/>
    <Routes>
 <Route path='/' element={<Home/>} />
 <Route path='/dashboard' element={<Dashboard/>} />
 <Route path='/contact' element={<Contact/>} />
 <Route path='/register' element={<Authe  register/>} />
 <Route path='/login' element={<Authe />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;

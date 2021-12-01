import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    </Router>
  );
} 

export default App;

/**
 * Yusuf
 * * yusuf
 * ? merhaba
 * TODO: ysufuusuf
 * !yasuduasudasd 
 * @spoar dasdasd
 * //jjıjııjıjı
 */

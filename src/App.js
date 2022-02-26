import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import './App.css';
import { Routes, Route} from 'react-router-dom';


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;

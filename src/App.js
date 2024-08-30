import './App.css';
import Timer from './components/Timer';
import Stopwatch from './components/Stpowatch';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar/ >
      <Routes>
        <Route path='Timer' element={<Timer/>} />
        <Route path='/' element={<Stopwatch/>} />
      </Routes>

    </div>
  );
}

export default App;

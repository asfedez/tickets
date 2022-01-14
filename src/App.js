
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/Home';
import Tickets from './pages/Tickets';

function App() {
  return (
    
    <Router>
      <nav>
      <Link to="/">Home</Link>
        <Link to="/tickets">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tickets" element={<Tickets/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;

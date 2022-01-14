
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './Pages/Home';
import Tickets from './Pages/Tickets';
import Ticket from './Pages/Ticket';

function App() {
  return (

    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tickets">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tickets" element={<Tickets />}></Route>
        <Route path="/ticket/:ticketID" element={<Ticket />}></Route>
      </Routes>
    </Router>

  );
}

export default App;

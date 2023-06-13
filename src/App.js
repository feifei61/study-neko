import logo from './logo.svg';
import Home from './pages/Home.js'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/Login.js';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

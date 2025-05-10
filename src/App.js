
// import { useEffect, useState} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Create from './component/create';
import Store from './component/store';
// import axios from 'axios';

function App() {
  
  return (
    <div className="App">
       <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#f0f0f0' }} id='header'>
        <Link id='one' to="/">Home</Link>
        <Link id='two' to="/create">Create Note</Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </div>
    
  );
}

export default App;

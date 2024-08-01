// src/Router.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Memories from './Memories';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/memories" element={<Memories />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import DoctorLoginPage from './Components/DoctorLoginPage';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DoctorLoginPage" element={<DoctorLoginPage />} />
      </Routes>
    </Router>
    
    
  );
}

export default App;

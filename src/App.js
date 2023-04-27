import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
// import './App.css';
import Home from './Components/Home';
import DoctorLogin from './Components/DoctorLogin';
import PatientLogin from './Components/PatientLogin';
import DoctorSignup from './Components/DoctorSignup';
import PatientSignup from './Components/PatientSignup';
import DoctorCreateProfile from './Components/DoctorCreateProfile';
import PatientCreateProfile from './Components/PatientCreateProfile';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DoctorLogin" element={<DoctorLogin />} />
          <Route path="/DoctorSignup" element={<DoctorSignup />} />
          <Route path="/DoctorCreateProfile" element={<DoctorCreateProfile />} />
          <Route path="/PatientLogin" element={<PatientLogin />} />
          <Route path="/PatientSignup" element={<PatientSignup />} />
          <Route path="/PatientCreateProfile" element={<PatientCreateProfile />} />
      </Routes>
    </Router>
    
    
  );
}

export default App;

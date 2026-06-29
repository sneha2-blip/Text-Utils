import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  });

  setTimeout(() => {
    setAlert(null);
  }, 2500);
}
  return (
    <Router>

      <Navbar />
     
      <Routes>
        <Route
          path="/"
          element={<Textform heading="Enter text to analyze" showAlert={showAlert} />}
        />

        <Route
          path="/about"
           element={<About />}
        />

      </Routes>

    </Router>
  );
}
  


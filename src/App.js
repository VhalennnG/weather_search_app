import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Weather from "./pages/weather";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Router>
      <div className='bg-neutral-800 w-full'>
        <Routes>
          <Route path='/' element={<Weather />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;

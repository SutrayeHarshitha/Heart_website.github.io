import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Heart, Activity, BookOpen, Mail, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Prediction from './pages/Prediction';
import ModelExplanation from './pages/ModelExplanation';
// import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/predict" element={<Prediction />} />
            {/* <Route path="/model" element={<ModelExplanation />} /> */}
            {/* <Route path="/resources" element={<Resources />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
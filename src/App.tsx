// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function AppContent() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('HandyMan Repairs');
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveSection = () => {
    const path = location.pathname.substring(1);
    return path === '' ? 'home' : path;
  };

  const handleOpenQuoteWithService = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForQuote(serviceTitle);
    }
    navigate('/contact');
  };

  return (
    <div id="wrap" className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">
      <TopBar />

      <Header 
        activeSection={getActiveSection()}
        onNavigate={(path) => navigate(path === 'home' ? '/' : `/${path}`)}
      />

      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                onNavigate={(sec) => navigate(sec === 'home' ? '/' : `/${sec}`)} 
                onRequestQuote={() => handleOpenQuoteWithService()}
              />
            } 
          />
          <Route 
            path="/about" 
            element={
              <About 
                onNavigate={(sec) => navigate(sec === 'home' ? '/' : `/${sec}`)} 
                onRequestQuote={() => handleOpenQuoteWithService()}
              />
            } 
          />
          <Route 
            path="/services" 
            element={
              <Services 
                onNavigate={(sec) => navigate(sec === 'home' ? '/' : `/${sec}`)} 
                onRequestQuote={(svc) => handleOpenQuoteWithService(svc)}
              />
            } 
          />
          <Route 
            path="/contact" 
            element={
              <Contact 
                onNavigate={(sec) => navigate(sec === 'home' ? '/' : `/${sec}`)} 
                prefilledService={selectedServiceForQuote}
              />
            } 
          />
        </Routes>
      </main>

      <Footer onNavigate={(sec) => navigate(sec === 'home' ? '/' : `/${sec}`)} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
import React, { useState } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AppRouter from './routes/AppRouter';

const App = () => {
  const [first, setfirst] = useState(second);
  return (
    <div className="grid grid-rows-layout min-h-screen bg-base dark:bg-baseDark">
      <NavBar />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;

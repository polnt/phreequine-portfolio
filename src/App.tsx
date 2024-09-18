import { useState } from 'react';

import Header from './components/Header/Header';
import Router from './Router';
import Menu from './components/Menu/Menu';

import './App.css';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header isOpen={isMenuOpen} closeMenu={() => setMenuOpen(false)} toggleMenu={() => setMenuOpen(!isMenuOpen)} />
      <Menu isOpen={isMenuOpen} closeMenu={() => setMenuOpen(false)} />
      <main className={isMenuOpen ? "hidden" : ""}>
        <Router />
      </main>
    </>
  );
}

export default App;

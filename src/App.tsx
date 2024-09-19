import { useState } from 'react';
import MenuContext from './reusable/context/MenuContext';

import Header from './components/Header/Header';
import Router from './Router';
import Menu from './components/Menu/Menu';

import './App.css';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MenuContext.Provider value={{ isOpen: isMenuOpen, setMenuOpen: setMenuOpen }}>
        <Header />
        <Menu />
        <main className={isMenuOpen ? "hidden" : ""}>
          <Router />
        </main>
      </MenuContext.Provider>
    </>
  );
}

export default App;

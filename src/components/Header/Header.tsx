import { useState } from 'react';
import Menu from "../Menu/Menu";
import { ToggleDarkMode } from '../ToggleDarkMode/ToggleDarkMode';
import { ToggleLanguage } from '../ToggleLanguage/ToggleLanguage';
import { ToggleMenu } from '../ToggleMenu/ToggleMenu';
import './header.css';

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header-container">
      <header className="header">
        <div></div>
        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
          <ToggleLanguage />
          <ToggleDarkMode />
          <ToggleMenu isOpen={isMenuOpen} onClick={() => setMenuOpen(!isMenuOpen)} />
        </div>
      </header>
      {isMenuOpen && <Menu close={() => setMenuOpen(false)} />}
    </div>
  );
};

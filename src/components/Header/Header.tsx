import { NavLink } from 'react-router-dom';
import { ToggleDarkMode } from '../ToggleDarkMode/ToggleDarkMode';
import { ToggleLanguage } from '../ToggleLanguage/ToggleLanguage';
import { ToggleMenu } from '../ToggleMenu/ToggleMenu';
import './header.css';

export interface HeaderProps {
  isOpen?: boolean;
  closeMenu?: () => void;
  toggleMenu?: () => void;
}

const Header = ({ isOpen, closeMenu, toggleMenu }: HeaderProps) => {
  return (
    <header className="header">
      <div>
        <NavLink to="/" onClick={closeMenu}>PC</NavLink>
      </div>
      <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
        <ToggleLanguage />
        <ToggleDarkMode />
        <ToggleMenu isOpen={isOpen} onClick={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;

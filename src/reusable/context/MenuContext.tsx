import { createContext } from 'react';

const MenuContext = createContext({ isOpen: false, setMenuOpen: {} });
export default MenuContext;

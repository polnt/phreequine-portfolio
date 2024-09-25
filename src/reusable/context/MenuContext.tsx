import { createContext } from 'react';

const MenuContext = createContext<{
  isOpen: boolean,
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: false,
  setMenuOpen: () => {}
});

export default MenuContext;

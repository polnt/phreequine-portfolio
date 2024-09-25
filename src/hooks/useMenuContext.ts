import { useContext } from 'react';
import MenuContext from '../reusable/context/MenuContext';

const useMenuContext = () => {
  const { isOpen, setMenuOpen } = useContext(MenuContext);

  if (setMenuOpen === null) throw new Error();

  return { isOpen, setMenuOpen };
};

export default useMenuContext;

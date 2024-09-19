import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import IconNavLink from '../IconNavLink/IconNavLink';
import Trail from "../Trail/Trail";
import MenuContext from '../../reusable/context/MenuContext';

// ICONS
import { GrHomeRounded } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { IoInformationCircleOutline as InfoIcon } from "react-icons/io5";
import { GrContact } from "react-icons/gr";

import './menu.css';

const Menu = () => {
  const { t } = useTranslation();
  const { isOpen, setMenuOpen } = useContext(MenuContext);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`menu ${isOpen ? "" : "hidden"}`}>
      <ul className='menu-list'>
        <Trail className='menu-trail-container' open={isOpen} height={'auto'}>
          <li>
            <IconNavLink
              to="/"
              label={t("home").toUpperCase()}
              icon={<GrHomeRounded />}
              className="menu-item"
              onClick={closeMenu}
            />
          </li>
          <li>
            <IconNavLink
              to="/work"
              label={t("work").toUpperCase()}
              icon={<FaCode />}
              className="menu-item"
              onClick={closeMenu}
            />
          </li>
          <li>
            <IconNavLink
              to="/about"
              label={t("about").toUpperCase()}
              icon={<InfoIcon />}
              className="menu-item"
              onClick={closeMenu}
            />
          </li>
          <li>
            <IconNavLink
              to="/contact"
              label={t("contact").toUpperCase()}
              icon={<GrContact />}
              className="menu-item"
              onClick={closeMenu}
            />
          </li>
        </Trail>
      </ul>
    </nav>
  );
};

export default Menu;

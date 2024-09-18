// import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import IconNavLink from '../IconNavLink/IconNavLink';

import { GrHomeRounded } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { IoInformationCircleOutline as InfoIcon } from "react-icons/io5";
import { GrContact } from "react-icons/gr";

import './menu.css';

export interface MenuProps {
  /** Optional click handler */
  isOpen?: boolean;
  closeMenu?: () => void;
}

const Menu = ({ isOpen, closeMenu }: MenuProps) => {
  const { t } = useTranslation();

  return (
    <nav className={`menu ${isOpen ? "" : "hidden"}`}>
      <ul className='menu-list'>
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
      </ul>
    </nav>
  );
};

export default Menu;

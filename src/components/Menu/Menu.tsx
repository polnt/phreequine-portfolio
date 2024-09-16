import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './menu.css';

export interface MenuProps {
  /** Optional click handler */
  close: () => void;
}

const Menu = ({ close }: MenuProps) => {
  const { t } = useTranslation();

  return (
    <div className="menu-container">
      <nav className='menu'>
        <ul>
          <li><NavLink className="menu-item" to="/" onClick={close}>{t("home").toUpperCase()}</NavLink></li>
          <li><NavLink className="menu-item" to="/work" onClick={close}>{t("work").toUpperCase()}</NavLink></li>
          <li><NavLink className="menu-item" to="/about" onClick={close}>{t("about").toUpperCase()}</NavLink></li>
          <li><NavLink className="menu-item" to="/contact" onClick={close}>{t("contact").toUpperCase()}</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

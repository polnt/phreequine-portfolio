import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './menu.css';

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className="menu-container">
      <nav className='menu'>
        <ul>
          <li><NavLink to="/">{t("home")}</NavLink></li>
          <li><NavLink to="/work">{t("work")}</NavLink></li>
          <li><NavLink to="/about">{t("about")}</NavLink></li>
          <li><NavLink to="/contact">{t("contact")}</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

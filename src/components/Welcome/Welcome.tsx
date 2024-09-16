import { useTranslation } from 'react-i18next';
import './welcome.css';
import { NavLink } from 'react-router-dom';

export const Welcome = () => {
  const { t } = useTranslation();

  return (
    <article className='welcome'>
      <div className="welcome-intro">
        <h1 className="welcome-intro">
          <span>{t("iAm1")}<span>Pol Casabayo</span></span>
          <span>{t("iAm2")}</span>
        </h1>
        <p>{t("iDo")}</p>
      </div>
      <div className="welcome-cta">
        <NavLink to="/work">{t("work")}</NavLink>
        <NavLink to="/about">{t("about")}</NavLink>
      </div>
    </article>
  );
};

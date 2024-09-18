import { useTranslation } from 'react-i18next';

import IconNavLink from '../IconNavLink/IconNavLink';

import { FaCode } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";

import './welcome.css';

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
        <IconNavLink to="/work" label={t("work")} icon={<FaCode />} />
        <IconNavLink to="/about" label={t("about")} icon={<GrContact />} />
      </div>
    </article>
  );
};

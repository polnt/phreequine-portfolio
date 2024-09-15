import {Button} from "../../stories/Button"
import { useTranslation } from 'react-i18next';
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
        <span>{t("iDo")}</span>
      </div>
      <div className="welcome-cta">
        <Button label={t("myProjects")} />
        <Button label={t("learnMore")}/>
      </div>
    </article>
  );
};

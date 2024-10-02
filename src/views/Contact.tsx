import { useTranslation } from 'react-i18next';
import "./contact.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="outlined">{t("contact")}</h1>
      <div className="sub-contact">
        <div>
          <h2>{t("email")}</h2>
          <a href="mailto:pol.c.dev@gmail.com">pol.c.dev@gmail.com</a>
        </div>
        <div className="socials">
          <h2>{t("socials")}</h2>
          <a href="https://www.linkedin.com/in/pol-casabayo/" target="_blank">LinkedIn</a>
          <a href="https://www.github.com/polnt" target="_blank">Github</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="outlined">{t("about")}</h1>
      <p>Passionné par la programmation, amoureux de l'internet, j'aime apprendre, partager et construire. . . (essentiellement autour des ces sujets, mais pas seulement !)</p>
    </div>
  );
};

export default About;

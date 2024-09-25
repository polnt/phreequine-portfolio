import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  const { t } = useTranslation();

  return (
    <article>
      <h1 className="outlined">{t("about")}</h1>
      <p>{t("aboutMe")}</p>
      <Link style={{ display: "flex", alignItems: "center", gap: "10px" }} to={t("resumeLink")} target="_blank">
        {t("resume")}<MdArrowOutward />
      </Link>
    </article>
  );
};

export default About;

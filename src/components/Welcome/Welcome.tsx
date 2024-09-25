import { useTranslation } from 'react-i18next';
import { useSprings } from '@react-spring/web';
import { useMenuContext } from '../../hooks';

import Trail from '../Trail/Trail';

import IconNavLink from '../IconNavLink/IconNavLink';

import { FaCode } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";

import './welcome.css';

const onHover = (bool: boolean) => ({
  from: {
    backgroundColor: "transparent",
    color: "var(--primaryColor)"
  },
  backgroundColor: bool ? "var(--callToActionColor)" : "transparent",
  color: bool ? "var(--contrastTextColor)" : "var(--primaryColor)",
  config: { duration: 0 }
});

export const Welcome = () => {
  const { isOpen } = useMenuContext();
  const { t } = useTranslation();
  const [springs, api] = useSprings(2, () => ({
    delay: 1500,
    from: {
      opacity: 0,
      x: 0,
      backgroundColor: "transparent",
      color: "var(--primaryColor)",
    },
    opacity: isOpen ? 0 : 1,
    x: isOpen ? 0 : 1,
    config: { duration: 1000 },
  }), [isOpen]);

  const style = springs.map(({ x, ...props }) => ({
    ...props,
    scale: x.to({
      range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
      output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
    })
  }));

  return (
    <article className='welcome'>
      <div className="welcome-intro">
        <h1 className="welcome-intro">

          <div className="welcome-intro-line">
            <span>{t("iAm1")}</span>
            <div>
              <Trail className="container" open={!isOpen} height={55} delay={500}>
                <span style={{ color: "var(--callToActionColor" }}>Pol</span>
                <span style={{ color: "var(--callToActionColor" }}>Casabayo</span>
              </Trail>
            </div>
          </div>

          <div className="welcome-intro-line">
            <span>{t("iAm2")}</span>
            <div>
              <Trail className="container" open={!isOpen} height={55} delay={1000}>
                <span style={{ color: "var(--callToActionColor" }}>fullstack /</span>
                <span style={{ color: "var(--callToActionColor" }}>devOps</span>
              </Trail>
            </div>
          </div>

        </h1>
        <p>{t("iDo")}</p>
      </div>
      <div className="welcome-cta">
        <IconNavLink
          to="/work"
          label={t("work")}
          icon={<FaCode />}
          style={style[0]}
          className="welcome-cta-item"
          onMouseEnter={() => api.start(i => i === 0 && onHover(true))}
          onMouseLeave={() => api.start(i => i === 0 && onHover(false))}
        />
        <IconNavLink
          to="/about"
          label={t("about")}
          icon={<GrContact />}
          style={style[1]}
          className="welcome-cta-item"
          onMouseEnter={() => api.start(i => i === 1 && onHover(true))}
          onMouseLeave={() => api.start(i => i === 1 && onHover(false))}
        />
      </div>
    </article>
  );
};

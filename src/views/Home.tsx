import {Button} from "../stories/Button"
import './home.css';

export const Home = () => {
  return (
    <article className='home'>
      <p className="home-intro">
        <h1 className="home-intro">
          <div>Salut, je suis <span>Pol Casabayo</span></div>
          <div>développeur web fullstack / devOps</div>
        </h1>
        <div>Je développe des applications web et mobile, de A à Z !</div>
      </p>
      <div className="home-cta">
        <Button label="Mes projets" />
        <Button label="En savoir plus"/>
      </div>
    </article>
  );
};

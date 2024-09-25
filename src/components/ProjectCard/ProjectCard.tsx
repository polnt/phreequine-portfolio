import { useState } from 'react';

import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import "./projectCard.css";

interface iProject {
  key?: string;
  projectName: string;
  liveUrl?: string;
  ghUrl?: string;
  mainTec: string[];
  mainTask?: string;
}

const ProjectCard =
  ({ projectName, mainTec, liveUrl, ghUrl }: iProject) => {

    const [hover, setHover] = useState(false);

    return (
      <a
        href={liveUrl}
        className="project-card"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="project-card-title">{projectName} {liveUrl && hover && <MdArrowOutward />}</div>
        <div className="project-card-tecs">
          {mainTec.map(tec => <span className="project-card-tag">{tec}</span>)}
        </div>
        {ghUrl && <a className="project-card-gh-icon" href={ghUrl} target="_blank" style={{ fontSize: "1.3em" }}><FaGithub /></a>}
      </a>
    );
  };

export default ProjectCard;

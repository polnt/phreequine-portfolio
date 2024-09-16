import { FaExternalLinkAlt } from "react-icons/fa";
import "./projectCard.css"

interface iProject {
  key: string;
  projectName: string;
  url?: string;
  mainTec?: string;
  mainTask?: string;
}

const ProjectCard =
  ({ projectName, mainTec }: iProject) => {
    return (
      <div className="project-card">
        <div>{projectName}</div>
        <div>{mainTec}</div>
        <FaExternalLinkAlt />
      </div>
    );
  };

export default ProjectCard;

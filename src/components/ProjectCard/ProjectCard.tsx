import { TbWorldShare } from "react-icons/tb";
import "./projectCard.css";

interface iProject {
  key: string;
  projectName: string;
  url?: string;
  mainTec?: string;
  mainTask?: string;
}

const ProjectCard =
  ({ projectName, mainTec, url }: iProject) => {
    return (
      <div className="project-card">
        <div>{projectName}</div>
        <div>{mainTec}</div>
        {url && <a href={url} target="_blank" style={{ fontSize: "1.3em" }}><TbWorldShare /></a>}
      </div>
    );
  };

export default ProjectCard;

import { useTranslation } from 'react-i18next';
import { useMenuContext } from '../hooks';

import ProjectCard from '../components/ProjectCard/ProjectCard';
import Trail from "../components/Trail/Trail";
import work from '../work.json';

import './projects.css';

interface iProject {
  projectName: string;
  liveUrl?: string;
  ghUrl?: string;
  mainTec: string[];
  mainTask: string;
}

const Projects = () => {
  const projects: iProject[] = work;
  const { t } = useTranslation();
  const { isOpen } = useMenuContext();

  return (
    <div className="projects-container">
      <div className="projects">
        <div className="projects-main-title outlined" style={{ padding: 0 }}>
          <h1>{t("work")}</h1>
          <span style={{ fontSize: "2em" }}>{projects.length}</span>
        </div>
        <Trail className='projects-list' open={!isOpen} height={"auto"}>
          {projects.map(project =>
            <ProjectCard
              key={project.projectName}
              liveUrl={project.liveUrl}
              ghUrl={project.ghUrl}
              projectName={project.projectName}
              mainTec={project.mainTec}
            />)}
        </Trail>
      </div>
    </div>
  );
};

export default Projects;

import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import work from '../work.json';

import './projects.css';

interface iProject {
  projectName: string;
  url?: string;
  mainTec: string;
  mainTask: string;
}

const Projects = () => {
  const projects: iProject[] = work;
  const { t } = useTranslation();

  return (
    <div className="projects-container">
      <div>
        <h1>Preview WIP</h1>
      </div>
      <div className="projects">
        <div className="projects-main-title outlined" style={{ padding: 0 }}>
          <h1>{t("work")}</h1>
          <span style={{ fontSize: "2em" }}>{projects.length}</span>
        </div>
        {projects.map(project => <ProjectCard key={project.projectName} url={project.url} projectName={project.projectName} mainTec={project.mainTec} />)}
      </div>
    </div>
  );
};

export default Projects;

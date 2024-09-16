import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import work from '../../public/work.json';

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
        <h1>{t("work")}</h1>
        {projects.map(project => <ProjectCard key={project.projectName} projectName={project.projectName} mainTec={project.mainTec} />)}
      </div>
    </div>
  );
};

export default Projects;

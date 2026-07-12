import React, { useState } from 'react';
import { caseStudyLabels, projectCaseStudies, ProjectCaseStudy } from '../data/portfolio';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectCardProps {
  project: ProjectCaseStudy;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const content = project.content[language];
  const labels = caseStudyLabels[language];
  const panelId = `${project.id}-details`;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-800 bg-secondary/40 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-highlight/50">
      <p className="mb-3 text-xs uppercase tracking-[0.16em] text-highlight">{labels.eyebrow}</p>
      <h3 className="mb-3 text-xl text-white" style={{ fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 500, letterSpacing: '-0.01em' }}>{content.title}</h3>
      <p className="flex-grow text-sm leading-relaxed text-gray-400" style={{ fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400 }}>{content.summary}</p>
      <button
        type="button"
        className="mt-6 inline-flex w-fit items-center gap-2 text-sm text-accent underline decoration-highlight/60 underline-offset-4 transition-colors hover:text-white"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? content.closeLabel : content.detailsLabel}
        <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div id={panelId} className="mt-6 space-y-5 border-t border-highlight/20 pt-5 text-sm leading-relaxed text-gray-300">
          <div><h4 className="mb-1 text-accent">{labels.problem}</h4><p>{content.problem}</p></div>
          <div><h4 className="mb-1 text-accent">{labels.approach}</h4><p>{content.approach}</p></div>
          <div><h4 className="mb-2 text-accent">{labels.technology}</h4><ul className="flex flex-wrap gap-2">{content.technologies.map((technology) => <li key={technology} className="rounded-full border border-highlight/30 px-3 py-1 text-xs text-accent">{technology}</li>)}</ul></div>
          <div><h4 className="mb-1 text-accent">{labels.status}</h4><p>{content.status}</p></div>
        </div>
      )}
    </article>
  );
};

const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <AnimatedSection id="projects">
      <h2 className="mb-16 text-center text-4xl font-light leading-tight text-white md:text-5xl" style={{ fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 300, letterSpacing: '-0.02em' }}>
        {t('sections.projects')}
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {projectCaseStudies.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </AnimatedSection>
  );
};

export default Projects;

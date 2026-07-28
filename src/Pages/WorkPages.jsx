import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";

export default function WorkPages() {
  const tones = ["tone-1", "tone-2", "tone-3", "tone-4"];

  return (
    <section className="section container">
      <div className="section-head">
        <div>
          <span className="eyebrow">Selected work</span>
          <h2>Projects that represent where I’m headed.</h2>
        </div>
        <p>
          These projects highlight UI/UX thinking, visual design, and Marketing.
        </p>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            tone={tones[index % 4]}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
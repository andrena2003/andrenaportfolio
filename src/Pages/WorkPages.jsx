import { useState } from "react";
import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";

export default function WorkPages() {
  const tones = ["tone-1", "tone-2", "tone-3", "tone-4"];
  const filters = [
    { value: "all", label: "All work" },
    { value: "marketing", label: "Marketing & Brand" },
    { value: "design", label: "UI/UX" },
    { value: "social", label: "Content & Social" },
  ];
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.discipline === activeFilter);

  return (
    <section className="section container">
      <div className="section-head">
        <div>
          <span className="eyebrow">Selected work</span>
          <h2>Projects that represent where I’m headed.</h2>
        </div>
        <p>
          Campaign strategy leads the work, supported by UI/UX and content that
          help the idea reach people clearly.
        </p>
      </div>

      <div className="work-filters" aria-label="Filter projects by discipline">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter.value}
            className={activeFilter === filter.value ? "is-active" : ""}
            aria-pressed={activeFilter === filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="work-grid">
        {visibleProjects.map((project, index) => (
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

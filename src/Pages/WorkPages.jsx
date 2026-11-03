import { useState } from "react";
import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";

export default function WorkPages() {
  const tones = ["tone-1", "tone-2", "tone-3", "tone-4"];
  const filters = [
    { value: "all", label: "All work" },
    { value: "design", label: "UI/UX & Mobile" },
    { value: "marketing", label: "Marketing & Content" },
    { value: "web", label: "Web Design" },
  ];
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const visibleProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) =>
        project.discipline === activeFilter || project.disciplines?.includes(activeFilter)
      );

  return (
    <section className="section container work-page">
      <div className="section-head work-page-head">
        <div>
          <span className="eyebrow">Selected work</span>
          <h1>Hospitality-minded graphic design, brand systems, and content.</h1>
        </div>
        <p>
          I’m building toward in-house hospitality design roles, with work spanning brand systems, print and digital production, local restaurant content, and service experiences.
        </p>
      </div>

      <div className="work-toolbar">
        <div className="work-filters" aria-label="Filter projects by discipline">
          {filters.map((filter) => (
            <button type="button" key={filter.value} className={activeFilter === filter.value ? "is-active" : ""} aria-pressed={activeFilter === filter.value} onClick={() => setActiveFilter(filter.value)}>
              {filter.label}
            </button>
          ))}
        </div>
        <button type="button" className="work-layout-toggle" aria-pressed={viewMode === "list"} onClick={() => setViewMode((current) => current === "grid" ? "list" : "grid")}>
          <span aria-hidden="true">{viewMode === "grid" ? "☷" : "▦"}</span>
          {viewMode === "grid" ? "Classic list" : "Card grid"}
        </button>
      </div>

      <div className="work-count" aria-live="polite">
        <span>{String(visibleProjects.length).padStart(2, "0")}</span>
        <p>{activeFilter === "all" ? "Selected case studies" : filters.find((filter) => filter.value === activeFilter)?.label}</p>
      </div>

      <div className={`work-grid view-${viewMode}`}>
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

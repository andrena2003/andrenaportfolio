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
          <h1>Projects that represent where I’m headed.</h1>
        </div>
        <p>
          Campaign strategy leads the work, supported by UI/UX and content that
          help the idea reach people clearly.
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
        <div className="work-view-switcher" aria-label="Choose project layout">
          <button type="button" className={viewMode === "grid" ? "is-active" : ""} aria-pressed={viewMode === "grid"} onClick={() => setViewMode("grid")}><span aria-hidden="true">▦</span> Editorial grid</button>
          <button type="button" className={viewMode === "list" ? "is-active" : ""} aria-pressed={viewMode === "list"} onClick={() => setViewMode("list")}><span aria-hidden="true">☷</span> Classic list</button>
        </div>
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

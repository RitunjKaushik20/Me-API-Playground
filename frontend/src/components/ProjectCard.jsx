export default function ProjectCard({ project }) {
  const skills = project.skills || [];

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{project.description}</p>
          {skills.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.id || skill.name}
                  className="inline-flex items-center rounded-full bg-cyan-50 px-2 py-1 text-xs font-medium text-cyan-700"
                >
                  {typeof skill === "string" ? skill : skill.name}
                </span>
              ))}
            </div>
          )}
        </div>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-cyan-700 hover:text-cyan-800 whitespace-nowrap"
          >
            View
          </a>
        ) : null}
      </div>
    </article>
  );
}

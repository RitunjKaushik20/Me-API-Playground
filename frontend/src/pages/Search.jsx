import { useState } from 'react';
import { searchAll } from '../api.js';
import ProjectCard from '../components/ProjectCard.jsx';
import SkillBadge from '../components/SkillBadge.jsx';

export default function Search() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState({ skills: [], projects: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError(false);
    try {
      const data = await searchAll(query.trim());
      setResult({
        skills: Array.isArray(data?.skills) ? data.skills : [],
        projects: Array.isArray(data?.projects) ? data.projects : [],
      });
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const skillLabels = result.skills
    .map((skill) => (typeof skill === 'string' ? skill : skill.name))
    .filter(Boolean);

  return (
    <section className="space-y-6">
      <form onSubmit={handleSearch} className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm"
          placeholder="Search skills or projects"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
        >
          Search
        </button>
      </form>

      {loading ? (
        <div className="text-sm text-slate-600">Loading…</div>
      ) : error ? (
        <div className="text-sm text-slate-600">Failed to load data</div>
      ) : (
        <div className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Matching Skills</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skillLabels.length === 0 ? (
                <span className="text-sm text-slate-500">No matching skills</span>
              ) : (
                skillLabels.map((skill) => <SkillBadge key={skill} label={skill} />)
              )}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Matching Projects</p>
            {result.projects.length === 0 ? (
              <div className="text-sm text-slate-500">No matching projects</div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {result.projects.map((project) => (
                  <ProjectCard key={project.id || project.title} project={project} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

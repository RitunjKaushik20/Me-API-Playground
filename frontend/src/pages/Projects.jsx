import { useEffect, useMemo, useState } from 'react';
import { getProjects, getSkills } from '../api.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    async function loadSkills() {
      try {
        const skillsData = await getSkills();
        if (!active) return;
        setSkills(Array.isArray(skillsData) ? skillsData : []);
      } catch (err) {
        if (!active) return;
        setSkills([]);
      }
    }
    loadSkills();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;
    async function loadProjects() {
      setLoading(true);
      setError(false);
      try {
        const data = await getProjects(selectedSkill || undefined);
        if (!active) return;
        setProjects(Array.isArray(data) ? data : []);
      } catch (err) {
        if (!active) return;
        setError(true);
      } finally {
        if (active) setLoading(false);
      }
    }
    loadProjects();
    return () => {
      active = false;
    };
  }, [selectedSkill]);

  const skillOptions = useMemo(() => {
    return skills.map((skill) => (typeof skill === 'string' ? skill : skill.name)).filter(Boolean);
  }, [skills]);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <div className="text-sm font-semibold text-slate-700">Filter by skill</div>
        <select
          className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm"
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
        >
          <option value="">All skills</option>
          {skillOptions.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="text-sm text-slate-600">Loading…</div>
      ) : error ? (
        <div className="text-sm text-slate-600">Failed to load data</div>
      ) : projects.length === 0 ? (
        <div className="text-sm text-slate-600">No projects found</div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id || project.title} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

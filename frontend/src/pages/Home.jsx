import { useEffect, useState } from "react";
import { getProfile, getSkills } from "../api.js";
import SkillBadge from "../components/SkillBadge.jsx";

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        setLoading(true);
        setError(false);

        const [profileData, skillsData] = await Promise.all([
          getProfile(),
          getSkills(),
        ]);

        if (!active) return;

        setProfile(profileData);
        setSkills(Array.isArray(skillsData) ? skillsData : []);
      } catch (err) {
        console.error(err);
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return <div className="text-sm text-slate-600">Loading…</div>;
  }

  if (error || !profile) {
    return (
      <div className="text-sm text-red-600">
        Failed to load data from backend
      </div>
    );
  }

  return (
    <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Profile
        </p>

        <h1 className="mt-3 text-2xl font-semibold text-slate-900">
          {profile.name}
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          {profile.education}
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          {profile.github && (
            <a
              className="text-cyan-700 hover:text-blue-300"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}

          {profile.linkedin && (
            <a
              className="text-cyan-700 hover:text-blue-300"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          )}

          {profile.portfolio && (
            <a
              className="text-cyan-700 hover:text-cyan-800"
              href={profile.portfolio}
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          )}
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Skills
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.length === 0 ? (
            <span className="text-sm text-slate-500">
              No skills returned
            </span>
          ) : (
            skills.map((skill) => (
              <SkillBadge key={skill.id} label={skill.name} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

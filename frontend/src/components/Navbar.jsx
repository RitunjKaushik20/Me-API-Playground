import { NavLink } from 'react-router-dom';

const linkBase = 'text-sm font-medium px-3 py-2 rounded-md';
const linkActive = 'bg-white text-slate-900 shadow-sm';
const linkIdle = 'text-slate-600 hover:text-slate-900 hover:bg-slate-100';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-slate-100/80 backdrop-blur">
      <div className="container-page h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-cyan-500" />
          <span className="text-sm font-semibold tracking-wide text-slate-800">Me-API Playground</span>
        </div>
        <nav className="flex items-center gap-1">
          <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>
            Profile
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>
            Projects
          </NavLink>
          <NavLink to="/search" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>
            Search
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

import { Link, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr] bg-slate-50">
      <aside className="bg-white border-r border-slate-200">
        <div className="p-4 font-semibold">EIT ERP</div>
        <nav className="px-2 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded hover:bg-slate-100">Dashboard</Link>
          <div className="mt-2 px-3 text-xs font-medium text-slate-500">Modules</div>
          <Link to="/crm" className="block px-3 py-2 rounded hover:bg-slate-100">CRM</Link>
          <Link to="/manufacturing" className="block px-3 py-2 rounded hover:bg-slate-100">Manufacturing</Link>
          <Link to="/inventory" className="block px-3 py-2 rounded hover:bg-slate-100">Inventory</Link>
          <Link to="/project" className="block px-3 py-2 rounded hover:bg-slate-100">Project</Link>
          <Link to="/admin" className="block px-3 py-2 rounded hover:bg-slate-100">Admin</Link>
        </nav>
      </aside>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}

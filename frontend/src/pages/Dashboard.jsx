export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-3">
          <input className="border rounded px-3 py-2 w-64" placeholder="Search" />
          <button className="rounded bg-blue-600 text-white px-4 py-2">New</button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded border bg-white p-4">
          <div className="text-sm text-slate-500">Open Opportunities</div>
          <div className="text-2xl font-semibold">24</div>
        </div>
        <div className="rounded border bg-white p-4">
          <div className="text-sm text-slate-500">Production Orders</div>
          <div className="text-2xl font-semibold">8</div>
        </div>
        <div className="rounded border bg-white p-4">
          <div className="text-sm text-slate-500">Available Stock</div>
          <div className="text-2xl font-semibold">1204</div>
        </div>
        <div className="rounded border bg-white p-4">
          <div className="text-sm text-slate-500">Active Projects</div>
          <div className="text-2xl font-semibold">5</div>
        </div>
      </div>
    </div>
  )
}
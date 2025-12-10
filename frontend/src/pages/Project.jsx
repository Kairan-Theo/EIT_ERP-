export default function Project() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Project</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded border bg-white">
          <div className="px-4 py-3 border-b">Projects</div>
          <div className="p-4 grid gap-2">
            <div className="flex justify-between text-sm">
              <div>Laser Upgrade</div>
              <div>Active</div>
            </div>
            <div className="flex justify-between text-sm">
              <div>New Product R&D</div>
              <div>Planning</div>
            </div>
          </div>
        </div>
        <div className="rounded border bg-white">
          <div className="px-4 py-3 border-b">Tasks</div>
          <div className="p-4 grid gap-2">
            <div className="flex justify-between text-sm">
              <div>Design BOM</div>
              <div>In Progress</div>
            </div>
            <div className="flex justify-between text-sm">
              <div>Budget Review</div>
              <div>Pending</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
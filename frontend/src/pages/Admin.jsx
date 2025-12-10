export default function Admin() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Admin</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded border bg-white">
          <div className="px-4 py-3 border-b">Users</div>
          <div className="p-4 grid gap-2">
            <div className="flex justify-between text-sm">
              <div>Admin</div>
              <div>Administrator</div>
            </div>
            <div className="flex justify-between text-sm">
              <div>Operator</div>
              <div>Manufacturing</div>
            </div>
          </div>
        </div>
        <div className="rounded border bg-white">
          <div className="px-4 py-3 border-b">Settings</div>
          <div className="p-4 grid gap-3">
            <div className="flex items-center gap-3">
              <div className="w-40 text-sm">Company</div>
              <input className="border rounded px-3 py-2 w-64" defaultValue="EIT Lasertechnik" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-40 text-sm">Currency</div>
              <input className="border rounded px-3 py-2 w-32" defaultValue="EUR" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
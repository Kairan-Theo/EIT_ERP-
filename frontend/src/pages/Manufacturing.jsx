export default function Manufacturing() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Manufacturing</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded border bg-white">
          <div className="px-4 py-3 border-b">Bill of Materials</div>
          <div className="p-4 grid gap-2">
            <div className="flex justify-between text-sm">
              <div>BOM-0001</div>
              <div>Laser Unit</div>
            </div>
            <div className="flex justify-between text-sm">
              <div>BOM-0002</div>
              <div>Power Supply</div>
            </div>
          </div>
        </div>
        <div className="rounded border bg-white">
          <div className="px-4 py-3 border-b">Production Orders</div>
          <div className="p-4 grid gap-2">
            <div className="flex justify-between text-sm">
              <div>MO-00012</div>
              <div>In Progress</div>
            </div>
            <div className="flex justify-between text-sm">
              <div>MO-00013</div>
              <div>Planned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
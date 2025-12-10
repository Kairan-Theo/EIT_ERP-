export default function Inventory() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Inventory</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded border bg-white">
          <div className="px-4 py-3 border-b">Warehouses</div>
          <div className="p-4 grid gap-2">
            <div className="flex justify-between text-sm">
              <div>Main</div>
              <div>980 items</div>
            </div>
            <div className="flex justify-between text-sm">
              <div>Spare</div>
              <div>224 items</div>
            </div>
          </div>
        </div>
        <div className="rounded border bg-white">
          <div className="px-4 py-3 border-b">Stock Moves</div>
          <div className="p-4 grid gap-2">
            <div className="flex justify-between text-sm">
              <div>IN-00045</div>
              <div>Received</div>
            </div>
            <div className="flex justify-between text-sm">
              <div>DO-00012</div>
              <div>Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
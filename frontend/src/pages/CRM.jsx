export default function CRM() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">CRM</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded border bg-white">
          <div className="px-4 py-3 border-b">Pipeline</div>
          <div className="p-4 grid grid-cols-3 gap-4">
            <div className="rounded bg-slate-50 p-3">
              <div className="text-sm">New</div>
              <div className="text-2xl font-semibold">8</div>
            </div>
            <div className="rounded bg-slate-50 p-3">
              <div className="text-sm">Qualified</div>
              <div className="text-2xl font-semibold">6</div>
            </div>
            <div className="rounded bg-slate-50 p-3">
              <div className="text-sm">Won</div>
              <div className="text-2xl font-semibold">3</div>
            </div>
          </div>
        </div>
        <div className="rounded border bg-white">
          <div className="px-4 py-3 border-b">Quotations</div>
          <div className="p-4">
            <div className="grid grid-cols-4 text-sm text-slate-500">
              <div>Number</div><div>Customer</div><div>Total</div><div>Status</div>
            </div>
            <div className="grid grid-cols-4 text-sm border-t py-2">
              <div>Q-2025-001</div><div>Acme GmbH</div><div>€ 12,400</div><div>Sent</div>
            </div>
            <div className="grid grid-cols-4 text-sm border-t py-2">
              <div>Q-2025-002</div><div>EIT Client</div><div>€ 4,980</div><div>Draft</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
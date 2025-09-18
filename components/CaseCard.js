export default function CaseCard({ title, summary, metrics }) {
  return (
    <div className="bg-slate-900/30 border border-slate-800 p-5 rounded-lg">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-slate-300 text-sm">{summary}</p>
      {metrics && (
        <div className="mt-3 flex gap-3">
          {metrics.map((m, i) => (
            <div key={i} className="bg-slate-800/50 px-3 py-2 rounded">
              <div className="text-xs text-slate-200">{m.label}</div>
              <div className="font-bold">{m.value}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

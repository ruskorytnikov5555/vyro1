export default function ServiceCard({ title, desc, bullets }) {
  return (
    <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-lg">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="mt-2 text-slate-300">{desc}</p>
      <ul className="mt-4 space-y-2">
        {bullets?.map((b, i) => (
          <li key={i} className="text-slate-300 text-sm">• {b}</li>
        ))}
      </ul>
    </div>
  );
}

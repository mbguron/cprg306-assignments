export default function Item({ name, quantity, category }) {
  return (
    <li className="rounded-lg border p-4 bg-white text-black dark:bg-slate-800 dark:text-white dark:border-slate-700">
      <div className="flex items-start justify-between">
        <span className="font-semibold">{name}</span>
        <span className="text-sm">Qty: {quantity}</span>
      </div>
      <div className="mt-1 text-xs opacity-80">Category: {category}</div>
    </li>
  );
}

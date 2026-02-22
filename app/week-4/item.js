export default function Item({ name, quantity, category }) {
  return (
    <li className="rounded-lg border p-4">
      <div className="flex items-start justify-between">
        <span className="font-semibold text-white">{name}</span>
        <span className="text-sm text-white">Qty: {quantity}</span>
      </div>
      <div className="mt-1 text-xs text-white">Category: {category}</div>
    </li>
  );
}

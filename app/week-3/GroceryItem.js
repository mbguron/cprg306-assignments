export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 mb-2 rounded-2xl">
      <p className="text-center font-semibold">{name}</p>
      <p className="text-center font-semibold">Quantity: {quantity}</p>
      <p className="text-center font-semibold">Category: {category}</p>
    </li>
  );
}

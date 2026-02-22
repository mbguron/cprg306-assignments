"use client";

import { useState } from "react";

const CATEGORY_OPTIONS = [
  { value: "produce", label: "Produce" },
  { value: "dairy", label: "Dairy" },
  { value: "bakery", label: "Bakery" },
  { value: "meat", label: "Meat" },
  { value: "frozen foods", label: "Frozen Foods" },
  { value: "canned goods", label: "Canned Goods" },
  { value: "dry goods", label: "Dry Goods" },
  { value: "beverages", label: "Beverages" },
  { value: "snacks", label: "Snacks" },
  { value: "household", label: "Household" },
  { value: "other", label: "Other" },
];

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      name: name.trim(),
      quantity,
      category,
    };

    console.log(item);
    alert(
      `Added: ${item.name}, Quantity: ${item.quantity}, Category: ${item.category}`,
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  function handleQuantityChange(e) {
    const next = parseInt(e.target.value, 10);

    if (Number.isNaN(next)) {
      setQuantity(1);
      return;
    }

    const clamped = Math.max(1, Math.min(99, next));
    setQuantity(clamped);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-black rounded-lg p-6 space-y-4"
    >
      <div>
        <label htmlFor="item-name" className="block text-white mb-1">
          Item name
        </label>
        <input
          id="item-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Item name"
          className="w-full p-2 text-white bg-black rounded-md border"
        />
      </div>

      <div className="flex gap-3 items-end">
        <div className="w-24">
          <label htmlFor="item-quantity" className="block text-white mb-1">
            Qty
          </label>
          <input
            id="item-quantity"
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-full p-2 rounded-md border"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="item-category" className="block text-white mb-1">
            Category
          </label>
          <select
            id="item-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 text-white bg-black rounded-md border"
          >
            {CATEGORY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-12 h-10 rounded-md bg-gray-700 text-white text-xl hover:bg-slate-900"
          aria-label="Add item"
          title="Add item"
        >
          +
        </button>
      </div>
    </form>
  );
}

"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      name: name.trim(),
      quantity: Number(quantity),
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

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-black rounded-lg p-6 space-y-4"
    >
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true}
          placeholder="Item name"
          className="w-full p-2 text-white rounded-md border"
        />
      </div>

      <div className="flex gap-3">
        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-24 p-2 rounded-md border"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 p-2 text-white bg-black rounded-md border"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>

        <button
          type="submit"
          className="w-12 rounded-md bg-gray-700 text-white text-xl hover:bg-slate-900"
        >
          +
        </button>
      </div>
    </form>
  );
}

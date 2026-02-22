"use client";

import { useState } from "react";
import itemsData from "./items.json";
import GroceryItemForm from "./GroceryItemForm";
import ItemList from "./ItemList";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <main className="min-h-screen p-8 bg-white text-black dark:bg-slate-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>

      <GroceryItemForm onAddItem={handleAddItem} />

      <div className="max-w-xl mx-auto mt-8">
        <ItemList items={items} />
      </div>
    </main>
  );
}

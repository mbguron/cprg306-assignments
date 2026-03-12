"use client";

import { useState } from "react";
import itemsData from "./items.json";

import GroceryItemForm from "./GroceryItemForm";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  function handleItemSelect(item) {
    let cleanedName = item.name.split(",")[0].trim();
    cleanedName = cleanedName.replace(/[^\p{L}\p{N}\s]/gu, "");
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen p-8 bg-white text-black dark:bg-slate-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>

      <GroceryItemForm onAddItem={handleAddItem} />

      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="w-full md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

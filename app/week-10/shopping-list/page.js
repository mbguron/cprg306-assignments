"use client";

import { useState, useEffect } from "react";

import GroceryItemForm from "./GroceryItemForm";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";
import { useUserAuth } from "../../contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems() {
    if (!user) return;

    const userItems = await getItems(user.uid);
    setItems(userItems);
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  async function handleAddItem(newItem) {
    if (!user) return;

    const id = await addItem(user.uid, newItem);
    setItems((prev) => [...prev, { id, ...newItem }]);
  }

  function handleItemSelect(item) {
    let cleanedName = item.name.split(",")[0].trim();
    cleanedName = cleanedName.replace(/[^\p{L}\p{N}\s]/gu, "");
    setSelectedItemName(cleanedName);
  }

  if (!user) {
    return (
      <main className="min-h-screen p-8 bg-white text-black dark:bg-slate-900 dark:text-white">
        <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>
        <p className="text-center">Please log in to view your shopping list.</p>
      </main>
    );
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

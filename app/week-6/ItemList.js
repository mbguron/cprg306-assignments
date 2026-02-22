"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "category") {
      const c = a.category.localeCompare(b.category);
      if (c !== 0) return c;
      return a.name.localeCompare(b.name);
    }

    return a.name.localeCompare(b.name);
  });

  function buttonClass(active) {
    return active
      ? "px-3 py-2 rounded-md border bg-slate-900 text-white dark:bg-white dark:text-black"
      : "px-3 py-2 rounded-md border bg-white text-black dark:bg-slate-900 dark:text-white";
  }

  return (
    <section className="space-y-3">
      <div className="flex gap-2">
        <button
          type="button"
          className={buttonClass(sortBy === "name")}
          onClick={() => setSortBy("name")}
        >
          Sort by name
        </button>

        <button
          type="button"
          className={buttonClass(sortBy === "category")}
          onClick={() => setSortBy("category")}
        >
          Sort by category
        </button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}

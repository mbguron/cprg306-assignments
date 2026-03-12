"use client";

import { useEffect, useState } from "react";

async function fetchMealList(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meals");
  }

  const data = await response.json();
  return data.meals || [];
}

export default function MealListByIngredient({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadMealList() {
    if (!ingredient) {
      setMeals([]);
      setError("");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const mealList = await fetchMealList(ingredient);
      setMeals(mealList);
    } catch (err) {
      setMeals([]);
      setError("Error loading meal ideas.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMealList();
  }, [ingredient]);

  return (
    <div className="rounded-lg border p-4 bg-white text-black dark:bg-slate-800 dark:text-white dark:border-slate-700">
      <h2 className="text-xl font-bold mb-3">Meal Ideas</h2>

      {!ingredient ? (
        <p>Select an item to see meal ideas.</p>
      ) : loading ? (
        <p>Loading meal ideas...</p>
      ) : error ? (
        <p>{error}</p>
      ) : meals.length === 0 ? (
        <p>No meal ideas found.</p>
      ) : (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="rounded border p-2 dark:border-slate-600"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

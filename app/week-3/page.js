import ItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="flex flex-col p-1 items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}

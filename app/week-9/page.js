"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Week9Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Week 9 Shopping List</h1>

      {!user ? (
        <div>
          <p className="mb-4">Please log in to access your shopping list.</p>
          <button
            onClick={handleSignIn}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Login with GitHub
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>

          <div className="flex gap-4">
            <Link
              href="/week-9/shopping-list"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Go to Shopping List
            </Link>

            <button
              onClick={handleSignOut}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

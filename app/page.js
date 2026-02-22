import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1> CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link href="/week-2"> -&gt; Week-2 Assignment</Link>
        </li>
        <li>
          <Link href="/week-3"> -&gt; Week-3 Assignment</Link>
        </li>
        <li>
          <Link href="/week-4"> -&gt; Week-4 Assignment</Link>
        </li>
        <li>
          <Link href="/week-5"> -&gt; Week-5 Assignment</Link>
        </li>
        <li>
          <Link href="/week-6"> -&gt; Week-6 Assignment</Link>
        </li>
      </ul>
    </main>
  );
}

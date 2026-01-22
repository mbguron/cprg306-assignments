import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      <p>Name: Mahabirjaisingh Guron</p>
      <p>
        Github:{" "}
        <Link href="https://github.com/mbguron/cprg306-assignments">
          mbguron/cprg306-assignments
        </Link>
      </p>
    </section>
  );
}

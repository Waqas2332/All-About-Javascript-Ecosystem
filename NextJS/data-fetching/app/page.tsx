import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </div>
  );
}

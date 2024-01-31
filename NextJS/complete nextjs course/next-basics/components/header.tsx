import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative p-8 flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="font-bold text-3xl">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/scale">Scale</Link>
          <Link href="/relaibilty">Relaibility</Link>
        </div>
      </nav>
    </div>
  );
}

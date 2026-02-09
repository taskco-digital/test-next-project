import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6">
      <ul className="flex gap-6">
        <li>
          <Link
            href="/"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

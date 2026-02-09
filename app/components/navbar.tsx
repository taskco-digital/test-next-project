export default function Navbar() {
  return (
    <nav className="flex gap-6">
      <ul className="flex gap-6">
        <li>
          <a
            href="/home"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

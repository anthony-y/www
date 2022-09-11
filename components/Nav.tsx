import Link from "next/link"

export function Navbar({ children }) {
  return <nav className="flex flex-row gap-8 md:gap-24 pt-6 justify-center dark:bg-dark">
    {children}
  </nav>
}

export const NavItem = ({ children, the_link }) => {
  return <Link href={the_link}>
    <a className="text-sm md:text-lg transition hover:text-blue-400 dark:text-white dark:hover:text-darkPrimary">
      {children}
    </a>
  </Link>
}
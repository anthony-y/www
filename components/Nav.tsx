import Link from "next/link"

export function Navbar({ children }) {
  return <div className="">
    <div className="flex flex-row gap-24 pt-6 justify-center dark:bg-dark">
      {children}
    </div>
  </div>
}

export const NavItem = ({ children, the_link }) => {
  return <Link href={the_link}>
    <a>
      <div className="text-lg transition hover:text-blue-400 dark:text-white">
        {children}
      </div>
    </a>
  </Link>
}
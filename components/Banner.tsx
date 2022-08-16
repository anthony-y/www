function Banner({ children }) {
  return <div className="flex flex-row justify-center gap-1 p-2 bg-gradient-to-r from-purple-500 to-purple-700 dark:from-lime-500 dark:to-lime-700 text-white">{children}</div>
}

export default Banner
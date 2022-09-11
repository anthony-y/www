const NameHero = () => {
  return <section className="flex flex-row justify-center pb-10 pt-20 dark:bg-dark">
    <article className="flex flex-col gap-6 align-center">

      <header className="flex flex-col gap-2">
        <p className="text-gray-400 text-center md:text-left">Hi, I'm</p>
        <h1 className="text-5xl lg:text-7xl font-bold text-center dark:text-white transition duration-500">
          Anthony Baynham
        </h1>
      </header>

      <div className="flex flex-col gap-2 text-center">

        <h2 className="text-xl md:text-3xl font-serif text-blue-400 to-blue-400 dark:text-darkPrimary transition duration-500">
          Full-stack web developer by day
        </h2>

        <h2 className="text-xl md:text-3xl font-serif text-lightSecondary dark:text-white/40 transition duration-500">
          Systems programmer by night
        </h2>
      </div>
      
    </article>
  </section>
}

export default NameHero
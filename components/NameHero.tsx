const NameHero = () => {
  return <div className="flex flex-row justify-center pb-10">
    <div className="flex flex-col gap-6 align-center">

      {/* <ul className="flex flex-row gap-10">
        <li>GitHub</li>
        <li>Email</li>
      </ul> */}

      <h1 className="text-5xl lg:text-7xl font-bold text-center">
        Anthony Baynham
      </h1>

      <div className="flex flex-col gap-2 text-center">

        <h2 className="text-3xl font-serif text-blue-400">
          Full-stack web developer by day
        </h2>

        <h2 className="text-3xl font-serif text-blue-800">
          Systems programmer by night
        </h2>
      </div>
    </div>
  </div>
}

export default NameHero;
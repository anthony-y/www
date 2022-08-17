import { DomainShowcaseProps } from '../types'
import { BasicCard, ImageCard, SkillsCard }  from './Cards'
import { ThemeProvider } from '../lib/theme'
import { useContext, useEffect, useState } from 'react'

function DomainShowcase({title, cardLines, skills, image, darkColour, lightColour, buttonClasses}: DomainShowcaseProps) {
  
  let [theme] = useContext(ThemeProvider)

  // The bottom section needs more padding than the top one.
  // TODO: I would like this to not be hard-coded.
  const workaround = (title == "Web" ? "pt-0" : "pt-16")

  const linkStyles = `
    transition duration-500 ${title == "Web" ? "bg-blue-400 hover:bg-white/30 dark:bg-orange-500 dark:hover:bg-white/10" : "bg-blue-900/60 dark:bg-violet-900/80 dark:hover:bg-white/10 hover:bg-white/30"}
    flex flex-row p-6 justify-center align-center
    w-full
    text-xl
    rounded-lg
  `

  return <section className={`${theme == 'light' ? lightColour : darkColour} min-h-[33vh] pb-12 md:pb-20 ${workaround}`}>
    <div className="container mx-auto">

      <h2 className="flex justify-center text-white text-5xl font-bold pb-6 md:pb-12">
        {title}
      </h2>

      {/* Grid layout for large displays */}
      <div className="hidden lg:grid grid-cols-3 gap-4">

        <SkillsCard skills={skills} iconSize={72}/>
        <BasicCard cardLines={cardLines} />

        <a href="https://github.com/anthony-y" className={linkStyles}>
          <p className={`my-auto text-white text-4xl`}>See all projects</p>
        </a>
      </div>

      {/* Stacked flex layout for small displays */}
      <div className="flex flex-col gap-4 lg:hidden">

        <SkillsCard skills={skills} iconSize={48}/>
        <BasicCard cardLines={cardLines} />

        <a href="https://github.com/anthony-y" className={linkStyles}>
          <p className="my-auto text-white">See all projects</p>
        </a>
      </div>
    </div>
  </section>
}

export default DomainShowcase
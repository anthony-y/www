import { DomainShowcaseProps } from '../types'
import { BasicCard, ImageCard, SkillsCard }  from './Cards'
import { ThemeProvider } from '../lib/theme'
import { useContext, useEffect, useState } from 'react'

function DomainShowcase({title, cardLines, skills, image, darkColour, lightColour, buttonClasses}: DomainShowcaseProps) {
  
  let [theme] = useContext(ThemeProvider)

  const workaround = (title == "Web" ? "pt-0" : "pt-16")
  const linkStyles = `bg-gradient-to-br ${theme == 'light' ? 'from-blue-400 to-blue-600' : 'from-orange-600 to-orange-700'} dark:${lightColour} flex flex-row p-6 justify-center align-center w-full text-xl rounded-lg`
  
  return (
    <section className={`${theme == 'light' ? lightColour : darkColour} min-h-[33vh] pb-12 md:pb-20 ${workaround}`}>

      <div className="container mx-auto">

        <h1 className="flex justify-center text-white text-5xl font-bold pb-6 md:pb-12">
          {title}
        </h1>

        {/* Grid layout for large displays */}
        <div className="hidden lg:grid grid-cols-3 gap-4">

          <SkillsCard skills={skills} iconSize={72}/>
          <BasicCard cardLines={cardLines} />

          <a href="/https://github.com/anthony-y" className={linkStyles}>
            <p className="my-auto text-white dark:text-orange-900">View projects</p>
          </a>
        </div>

        {/* Stacked flex layout for small displays */}
        <div className="flex flex-col gap-4 lg:hidden">

          <SkillsCard skills={skills} iconSize={48}/>
          <BasicCard cardLines={cardLines} />

          <a href="https://github.com/anthony-y" className={linkStyles}>
            <p className="my-auto text-white dark:text-orange-900">View projects</p>
          </a>
        </div>
      </div>
    </section>)
}

export default DomainShowcase
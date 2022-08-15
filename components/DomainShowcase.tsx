import { Domain } from '../types'
import { BasicCard, ImageCard, SkillsCard }  from './Cards'

function DomainShowcase({ title, cardLines, skills, image, colour, buttonClasses }: Domain) {
  const workaround = (title == "Web" ? "pt-0" : "pt-16")
  return <section className={`${colour} min-h-[33vh] pb-12 md:pb-20 ${workaround}`}>

    <div className="container mx-auto">

      <h1 className="flex justify-center text-white text-5xl font-bold pb-6 md:pb-12">
        {title}
      </h1>

      {/* Grid layout for large displays */}
      <div className="hidden lg:grid grid-cols-3 gap-4">

        <SkillsCard skills={skills} iconSize={72}/>
        <BasicCard cardLines={cardLines} />

        <a href="/projects" className={`${buttonClasses} flex flex-row p-6 justify-center align-center w-full text-xl rounded-lg outline outline-1 outline-blue-500`}>
          <p className="my-auto">See projects</p>
        </a>
      </div>

      {/* Stacked flex layout for small displays */}
      <div className="flex flex-col gap-4 lg:hidden">

        <SkillsCard skills={skills} iconSize={48}/>
        <BasicCard cardLines={cardLines} />

        <a href="/projects" className={`${buttonClasses} flex flex-row p-6 justify-center align-center w-full text-xl rounded-lg outline outline-1 outline-blue-500`}>
          <p className="my-auto">See projects</p>
        </a>
      </div>
    </div>
  </section>
}

export default DomainShowcase
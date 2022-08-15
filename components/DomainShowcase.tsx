import { Domain } from '../types'
import { BasicCard, ImageCard, SkillsCard }  from './Cards'

function DomainShowcase({ title, cardLines, skills, image, colour, buttonClasses }: Domain) {
  const workaround = (title == "Web" ? "pt-0" : "pt-16")
  return <section className={`${colour} min-h-[33vh] pb-12 md:pb-20 ${workaround}`}>

    <div className="container mx-auto">

      <h1 className="flex justify-center text-white text-5xl font-bold pb-6 md:pb-12">
        {title}
      </h1>

      <div className="grid grid-cols-3 grid-col gap-4">
        <SkillsCard skills={skills}/>
        <BasicCard cardLines={cardLines} />

        <a href="/projects" className={`${buttonClasses} flex flex-row justify-center align-center w-full text-xl rounded-lg outline outline-1 outline-blue-500`}>
          <p className="my-auto">See projects</p>
        </a>
      </div>
    </div>
  </section>
}

export default DomainShowcase
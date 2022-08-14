import { Domain } from '../types'
import Card from './Card'

function DomainShowcase({ title, projects, skills, image, colour }: Domain) {
  return <section className={`${colour} min-h-[33vh] pb-12 md:pb-20`}>
    <h1 className="flex justify-center text-white text-5xl font-bold pb-6 md:pb-12 uppercase">
      {title}
    </h1>
    <div className="flex flex-col lg:flex-row justify-center">
      {projects.map((p) => <Card {...p}/>)}
      {projects.map((p) => <Card {...p}/>)}
      {projects.map((p) => <Card {...p}/>)}
    </div>
  </section>
}

export default DomainShowcase
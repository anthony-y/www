import { GetStaticProps, InferGetStaticPropsType } from 'next'
import NameHero from '../components/NameHero'
import DomainShowcase from '../components/DomainShowcase'
import { Domain, Project, Skill } from "../types"
import Image from 'next/image'

function Frontpage({ domains }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <>
    <NameHero></NameHero>

    <div className="flex flex-col">

      <div className="svg-background-cover day"></div>

      <DomainShowcase {...domains[0]}/>

      <div className="svg-background-cover day-bottom -mt-[1px]"></div>

      <DomainShowcase {...domains[1]}/>

      <div className="svg-background-cover about-me-transition -mt-[1px]"></div>

      <section className="bg-white h-[50vh] w-[60%] mx-auto -my-20">
        <h1 className="flex justify-center text-black text-5xl font-bold align-center">About Me</h1>

        <div className="flex justify-center pt-8 w-[50%] mx-auto">
          <article className="flex flex-col justify-center gap-2">
            <p>{`I’m currently a freelance full-stack developer, systems administrator and student. I’m looking for a new hybrid or remote opportunity as I head into this year of university.`}</p>
            <p>{`Although I’ve been working professionally as a programmer since just 2021, my most “starred” GitHub repository, SharpECS, is a library I wrote at age 14 – seven years ago.`}</p>
            <p>{`During the summer I reside on the south-coast, while the rest of the year I study Computer Science at the University of Sussex, and live in Brighton.`}</p>
          </article>
          {/* <Image src="/me.png" layout="fill"></Image> */}
        </div>
      </section>

      <section className="bg-white max-h-[33vh] svg-background-cover blurry-gradient">
        <div className="container mx-auto">
          <h1 className="pt-28 flex justify-center text-black text-5xl font-bold align-center">Contact</h1>
          <a href="mailto:anthonybaynham2001@gmail.com"><p className="hover:text-gray-700 transition flex flex-col justify-center items-center text-center pt-2 text-black text-2xl">anthonybaynham2001@gmail.com</p></a>
        </div>
      </section>
    </div>
  </>
}

export const getStaticProps = async () => {
  const web: Domain = {
    cardLines: new Array<string>(
      "During the day, I build attractive digital marketing experiences",
      "I utilise modern JavaScript frameworks like SvelteKit and NextJS to deliver impressive sites for local businesses",
    ),
    title: "Web",
    skills: new Array<Skill>('nextjs', 'ts', 'js', 'svelte', 'html', 'css', 'go', 'wordpress'),
    image: "/mrandmrs.png",
    colour: "bg-blue-400",
    buttonClasses: "bg-gradient-to-r text-white from-blue-400 to-blue-600 hover:bg-gradient-to-br hover:text-blue-50/80 transition duration-300"
  }

  const systems: Domain = {
    cardLines: new Array<string>(
      "I moonlight as a C++ developer",
      "I build things that go fast to solve hard problems and keep myself sharp",
      "Currently working on Gel - an experimental programming language",
    ),
    title: "Systems",
    skills: new Array<Skill>('c', 'cpp', 'go', 'csharp'),
    image: "/mrandmrs.png",
    colour: "bg-blue-900",
    buttonClasses: "bg-gradient-to-r text-white from-blue-700 to-blue-900 hover:bg-gradient-to-br hover:text-blue-50/80 transition duration-300"
  }

  return {
    props: {
      domains: [web, systems]
    }
  }
}

export default Frontpage;
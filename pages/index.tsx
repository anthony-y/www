import { GetStaticProps, InferGetStaticPropsType } from 'next'
import NameHero from '../components/NameHero'
import DomainShowcase from '../components/DomainShowcase'
import { DomainShowcaseProps, Project, Skill } from "../types"
import { ThemeProvider } from '../lib/theme'
import { useEffect, useState, useContext } from 'react'

function Frontpage({ domains }: InferGetStaticPropsType<typeof getStaticProps>) {

  let [theme] = useContext(ThemeProvider)

  return <>
    <NameHero></NameHero>

    <div className="flex flex-col">

      {theme == 'light' && <div className={`svg-background-cover day -mt-[1px]`}></div>}
      {theme == 'dark'  && <div className={`svg-background-cover wave-night -mt-[1px]`}></div>}
      <DomainShowcase {...domains[0]}/>

      {theme == 'light' && <div className={`svg-background-cover day-bottom -mt-[1px]`}></div>}
      {theme == 'dark'  && <div className={`svg-background-cover wave-night-bottom -mt-[1px]`}></div>}
      <DomainShowcase {...domains[1]}/>

      {theme == 'light' && <div className={`svg-background-cover about-me-transition -mt-[1px]`}></div>}
      {theme == 'dark' && <div className={`svg-background-cover about-me-transition-night -mt-[1px]`}></div>}

      <section className="bg-white h-full w-full mx-auto pb-[20vh] dark:bg-dark dark:text-white -mt-[1px]">
        <h1 className="flex justify-center text-black text-5xl font-bold align-center dark:text-white">About Me</h1>

        <div className="flex justify-center w-[50%] mx-auto">
          <article className="flex pt-3 flex-col justify-center gap-2">
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
  const web: DomainShowcaseProps = {
    cardLines: new Array<string>(
      "During the day, I build attractive digital marketing experiences",
      "I utilise modern JavaScript frameworks like SvelteKit and NextJS to deliver impressive sites for local businesses",
    ),
    title: "Web",
    skills: new Array<Skill>('nextjs', 'ts', 'js', 'svelte', 'html', 'css', 'go', 'wordpress'),
    image: "/mrandmrs.png",
    lightColour: "bg-blue-400",
    darkColour: 'bg-myorange',
    buttonClasses: "bg-gradient-to-l text-white from-blue-500 to-blue-600 hover:bg-gradient-to-br hover:text-blue-50/80 transition duration-300"
  }

  const systems: DomainShowcaseProps = {
    cardLines: new Array<string>(
      "I moonlight as a C++ developer",
      "I build things that go fast to solve hard problems and keep myself sharp",
      "Currently working on Gel - an experimental programming language",
    ),
    title: "Systems",
    skills: new Array<Skill>('c', 'cpp', 'go', 'csharp'),
    image: "/mrandmrs.png",
    lightColour: "bg-blue-900",
    darkColour: 'bg-mygreen',
    buttonClasses: "bg-gradient-to-r text-white from-blue-700 to-blue-900 hover:bg-gradient-to-br hover:text-blue-50/80 transition duration-300"
  }

  return {
    props: {
      domains: [web, systems]
    }
  }
}

export default Frontpage;
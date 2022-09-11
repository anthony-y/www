import { InferGetStaticPropsType } from 'next'
import NameHero from '../components/NameHero'
import DomainShowcase from '../components/DomainShowcase'
import { DomainShowcaseProps, Skill } from "../types"
import { ThemeProvider } from '../lib/theme'
import { useContext } from 'react'

function Frontpage({ domains }: InferGetStaticPropsType<typeof getStaticProps>) {

  let [theme] = useContext(ThemeProvider)

  return <>

    {/* Preload */}
    <div className="hidden">
      <img src="/shapes/blurry-gradient-day.svg"></img>
      <img src="/shapes/blurry-gradient-night.svg"></img>
      <img src="/shapes/wave-day-top.svg"></img>
      <img src="/shapes/wave-night-top.svg"></img>
      <img src="/shapes/wave-day-bottom.svg"></img>
      <img src="/shapes/wave-night-bottom.svg"></img>
      <img src="/shapes/wave-about-me-transition.svg"></img>
      <img src="/shapes/wave-night-about-me-transition.svg"></img>
    </div>

    <NameHero></NameHero>

    <section className="flex flex-col">

      {
      // SVG shapes - we render based on `theme` so that the graphics will update reactively when the theme is changed.
      // Using Tailwind's `dark:` variant does not work.
      (
      (theme == 'server' && <div className="svg-background-cover pb-20"></div>)
      ||
      (theme == 'light' && <div className={`svg-background-cover day -mt-[1px]`}></div>)
      ||
      (theme == 'dark'  && <div className={`svg-background-cover wave-night -mt-[1px]`}></div>)
      )
      }

      <DomainShowcase {...domains[0]}/>

      {
      theme == 'server' && <div className="svg-background-cover"></div>
      || 
      theme == 'light' && <div className={`svg-background-cover day-bottom -mb-[1px] w-[100vw]`}></div>
      ||
      theme == 'dark'  && <div className={`svg-background-cover wave-night-bottom -mb-[1px]`}></div>
      }

      <DomainShowcase {...domains[1]}/>

      {
      theme == 'server' && <div className="svg-background-cover pb-20"></div>
      ||
      theme == 'light' && <div className={`svg-background-cover about-me-transition -mt-[1px]`}></div>
      ||
      theme == 'dark'  && <div className={`svg-background-cover about-me-transition-night -mt-[1px]`}></div>
      }

      <section className="bg-white h-full w-full mx-auto pb-[20vh] dark:bg-dark dark:text-white -mt-[1px] pt-12">
        <h1 className="flex justify-center text-black text-5xl font-bold align-center dark:text-white">About Me</h1>

        <div className="flex justify-center w-[75%] mx-auto">
          <article className="flex pt-3 flex-col gap-4 md:text-center">
            <p>{`I’m currently a freelance full-stack developer, systems administrator and student.`}</p>
            <p>{`Although I’ve been working professionally as a programmer since just 2021, my most “starred” GitHub repository, SharpECS, is a library I wrote at age 14 – seven years ago.`}</p>
            <p>{`During the summer I reside in the New Forest, while the rest of the year I study Computer Science at the University of Sussex, and live in Brighton.`}</p>
          </article>
          {/* <Image src="/me.png" layout="fill"></Image> */}
        </div>
      </section>

      <section className={`bg-white min-h-[40vh] md:max-h-[30vh] svg-background-cover ${theme == 'light' ? "blurry-gradient" : "blurry-gradient-night"}`}>
        <article className="container mx-auto text-white">
          <h1 className="pt-28 flex justify-center text-5xl font-bold align-center">Contact</h1>
          <a href="mailto:anthonybaynham2001@gmail.com"><p className="hover:underline transition flex flex-col justify-center items-center text-center pt-3 text-lg md:text-2xl">anthonybaynham2001@gmail.com</p></a>
        </article>
      </section>

    </section>
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
    lightColour: "bg-lightPrimary",
    darkColour: 'bg-darkPrimary',
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
    lightColour: "bg-lightSecondary",
    darkColour: 'bg-darkSecondary',
    buttonClasses: "bg-gradient-to-r text-white from-blue-700 to-blue-900 hover:bg-gradient-to-br hover:text-blue-50/80 transition duration-300"
  }

  return {
    props: {
      domains: [web, systems]
    }
  }
}

export default Frontpage;
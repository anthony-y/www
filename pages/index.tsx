import { GetStaticProps, InferGetStaticPropsType } from 'next'
import NameHero from '../components/NameHero'
import DomainShowcase from '../components/DomainShowcase'
import { Domain, Project, Skill } from "../types"

function Frontpage({ domains }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <>
    <NameHero></NameHero>

    <div className="flex flex-col">

      <div className="svg-background-cover day"></div>

      <DomainShowcase {...domains[0]}/>

      <div className="svg-background-cover day-bottom"></div>

      <DomainShowcase {...domains[1]}/>

      <div className="svg-background-cover about-me-transition -mt-[1px]"></div>

      <section className="bg-white h-[50vh] container mx-auto">
        <h1 className="flex justify-center text-black text-4xl font-bold align-center">About Me</h1>

        <div className="flex justify-center align-center">
          {/* Image */}
        </div>

        <p className="flex flex-col justify-center items-center text-center pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, voluptates corporis accusantium iure quod officia aspernatur quam libero cum, rerum voluptatem, rem totam. Doloribus reiciendis soluta ipsum impedit atque unde?</p>
      </section>

      <section className="bg-white h-[40vh] svg-background-cover blurry-gradient">
        <div className="container mx-auto">
          <h1 className="pt-28 flex justify-center text-black text-4xl font-bold align-center">Contact</h1>
          <p className="flex flex-col justify-center items-center text-center pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, voluptates corporis accusantium iure quod officia aspernatur quam libero cum, rerum voluptatem, rem totam. Doloribus reiciendis soluta ipsum impedit atque unde?</p>
        </div>
      </section>

    </div>
  </>
}

export const getStaticProps = async () => {
  const web: Domain = {
    projects: new Array<Project>({
      key: 0,
      title: "Gel",
      description: "Experimental systems programming language. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias illo sapiente ad nostrum numquam distinctio perferendis eius aut sequi provident beatae architecto, quia corrupti totam laboriosam ducimus voluptates dignissimos quo!" 
    }),
    title: "Web",
    skills: new Array<Skill>('js', 'html', 'css', 'go', 'nginx', 'wordpress'),
    image: "/me.png",
    colour: "bg-blue-400",
  }

  const systems: Domain = {
    projects: new Array<Project>({
      key: 1,
      title: "Gel",
      description: "Experimental systems programming language. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias illo sapiente ad nostrum numquam distinctio perferendis eius aut sequi provident beatae architecto, quia corrupti totam laboriosam ducimus voluptates dignissimos quo!" 
    }),
    title: "Systems",
    skills: new Array<Skill>('c', 'cpp', 'compiler'),
    image: "/me.png",
    colour: "bg-blue-900",
  }

  return {
    props: {
      domains: [web, systems]
    }
  }
}

export default Frontpage;
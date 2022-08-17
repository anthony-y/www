import { ShowcaseImage, SiteTheme, Skill } from '../types'
import Image from "next/image"

function useSkillIcon(s: Skill) {
  let url = ""
  if (s == 'c') url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
  if (s == 'cpp') url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  if (s == 'js') url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  if (s == 'css') url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
  if (s == 'html') url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
  if (s == 'go') url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
  if (s == 'python') url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  if (s == 'ts') url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  if (s == 'nginx') url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
  if (s == 'wordpress') url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
  if (s == 'nextjs') url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
  if (s == 'csharp') url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
  if (s == 'svelte') url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
  return url
}

export const BasicCard = ({ cardLines }: { cardLines: string[] }) => {
  return <div className="p-4 flex flex-col justify-center gap-6 bg-white dark:bg-dark rounded-lg shadow-md h-full">
    {cardLines.map((l,i) => <p key={i} className="text-lg text-center dark:text-white">{l}.</p>)}
  </div>
}

export const ImageCard = ({ title, image }: { title: string, image: ShowcaseImage }) => {
  return <div className="p-2 flex flex-col bg-white rounded-lg shadow-md h-full">
    <Image src={image} width={1280} height={720}/>
  </div>
}

export const SkillsCard = ({ skills, iconSize, theme }: { skills: Skill[], iconSize: number, theme: SiteTheme }) => {
  const gridSetup = (skills.length < 6 ? "grid-cols-2" : "grid-cols-3")
  
  return <div className="p-6 flex flex-col bg-white dark:bg-dark rounded-lg shadow-md h-full">
    <div className={`grid ${gridSetup} grid-rows-2 grid-flow-col gap-8`}>
      {skills.map((s,i) => <Image key={i} src={useSkillIcon(s)} width={iconSize} height={iconSize} className={`${s == 'nextjs' && theme == 'dark' ? "image-black-to-white" : ""}`}/>)}
    </div>
  </div>
}

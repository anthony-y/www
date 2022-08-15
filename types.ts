import { StaticImageData } from "next/image"
import { ReactElement } from "react"

export interface Project {
  title: string
  description: string
}

export type Skill = 'svelte' | 'cpp' | 'c' | 'csharp' | 'js' | 'css' | 'html' | 'go' | 'python' | 'nginx' | 'wordpress' | 'nextjs' | 'ts'

export type ShowcaseImage = StaticImageData | string

export interface Domain {
  title: string
  cardLines: Array<string>
  skills: Array<Skill>
  image: ShowcaseImage
  colour: string
  buttonClasses: string
}

export type FrontpageProps = {
  props: {
    domains: Array<Domain>,
  }
}

import { StaticImageData } from "next/image"
import { ReactElement } from "react"
import { domainToASCII } from "url"

export interface Project {
  title: string
  description: string
}

export type Skill = 'svelte' | 'cpp' | 'c' | 'csharp' | 'js' | 'css' | 'html' | 'go' | 'python' | 'nginx' | 'wordpress' | 'nextjs' | 'ts'

export type ShowcaseImage = StaticImageData | string

export type SiteTheme = 'light' | 'dark'

export interface DomainShowcaseProps {
  title: string
  cardLines: Array<string>
  skills: Array<Skill>
  image: ShowcaseImage
  darkColour: string
  lightColour: string
  buttonClasses: string
}

export type FrontpageProps = {
  props: {
    domains: Array<DomainShowcaseProps>,
  }
}

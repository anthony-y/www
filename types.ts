export interface Project {
  title: string
  description: string
  key: number
}

export type Skill = 'cpp' | 'c' | 'compiler' | 'js' | 'css' | 'html' | 'go' | 'python' | 'nginx' | 'wordpress'

export interface Domain {
  projects: Array<Project>
  title: string
  skills: Array<Skill>
  image: string
  colour: string
}

export type FrontpageProps = {
  props: {
    domains: Array<Domain>,
  }
}

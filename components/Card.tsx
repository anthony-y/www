import { Project } from '../types'

const Card = ({ key, title, description }: Project) => {
  return <div className="p-4 m-4 flex flex-col bg-white rounded-lg shadow-md outline outline-1 outline-gray-100 h-full">

    <h1 className="text-xl">{title}</h1>

    <p className="p-1">
      {description}
    </p>
  </div>
}

export default Card
import Image from "next/image";

import projects from "@/public/projects.json"
import Link from "next/link";
import DrawOutlineButton from "../components/drawoutlinebtn";

  
const Projects = () => {

 

  return (
    
    <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Projects</h1>
        <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className=" rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105  bg-gradient-to-b from-blue-950 to-white">
              <Image src={project.image} alt={project.title} width={1000} height={1000} className="  "  />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Project Goals</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {project.goals.map((goal) => (
                      <li key={project.id}>{goal}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Outcomes</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {project.outcomes.map((outcome) => (
                      <li key={project.id}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={project.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                  ))}
                </div>
                <Link href={`/projects/${project.id}`} className="text-blue-500 hover:underline mt-4 block">
                  <DrawOutlineButton type="submit" className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gradient-to-t from-blue-950 to-white hover:text-gray-800 ">Learn More</DrawOutlineButton>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

  )
}

export default Projects
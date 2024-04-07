"use client";

import projects from "@/public/projects.json";
import Image from 'next/image';


function ProjectDetails({params}: {params : {id: string}}) {
    
    
    const project = projects.find(p => String(p.id) === params.id  );


    

    if (!project) {
        return <div>Loading...</div>;
      }

  return (
    
    <div className="container mx-auto py-8 px-4 bg-gradient-to-b from-blue-950 to-white">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">{project.title}</h1>
        <div className= " rounded-lg shadow-md overflow-hidden">
          <Image src={project.image} alt={project.title} width={1000} height={1000} className="w-full h-96 object-cover object-center" />
          <div className="p-6">
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
                {project.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap mb-4">
              <h3 className=" text-lg font-semibold mb-2 mr-2">Tags:</h3>
              <div className="flex">
                {project.tags.map((tag, index) => (
                  <span key={index} className="inline-block bg-blue-500 rounded-full px-2 py-1 text-xs  text-white mr-2 mb-2">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProjectDetails




function AboutPage() {
  return (
    

        <div className="container mx-auto py-8 px-4 ">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Who we are</h1>
          <div className=" bg-gradient-to-t from-white to-blue-950 rounded-lg shadow-md p-6 mb-8">
            <p className="text-lg mb-4">Initiative Youth Development Programme (IYDP) is a nonprofit organization based in Pretoria, South Africa. Our mission is to guide and empower young teenagers to reach their full potential and achieve their goals.</p>
            <p className="text-lg  mb-4">At IYDP, we believe in providing comprehensive support and resources to young individuals as they navigate the challenges of adolescence and prepare for the future. We offer mentorship programs, educational workshops, career guidance, and various community initiatives to foster personal growth and development.</p>
            <p className="text-lg  mb-4">Our dedicated team of professionals and volunteers are committed to making a positive impact in the lives of young people. Together, we strive to create a supportive and inclusive environment where every individual has the opportunity to thrive.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className=" rounded-lg shadow-md p-6 mb-8 hover:scale-105 transform transition duration-300 ease-in-out bg-gradient-to-t from-white to-blue-950">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg mb-4">To empower young teenagers and equip them with the skills, knowledge, and opportunities they need to succeed in life.</p>
            </div>
            <div className=" rounded-lg shadow-md p-6 mb-8 hover:scale-105 transform transition duration-300 ease-in-out bg-gradient-to-t from-white to-blue-950">
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg  mb-4">A future where every young person has the resources and support they need to achieve their dreams and make a positive impact in their communities.</p>
            </div>
            <div className=" rounded-lg shadow-md p-6 mb-8 hover:scale-105 transform transition duration-150 ease-in-out bg-gradient-to-t from-white to-blue-950">
                <h2 className="text-2xl font-bold mb-4">Our Goals</h2>
                <ul className="list-disc pl-6 text-lg">
                <li className="mb-2">Provide mentorship and guidance to young individuals</li>
                <li className="mb-2">Offer educational and career development programs</li>
                <li className="mb-2">Promote personal growth and leadership skills</li>
                <li className="mb-2">Engage with the community through outreach initiatives</li>
                <li className="">Advocate for youth empowerment and equality</li>
                </ul>
            </div>
           </div>
        </div>
    
  )
}

export default AboutPage
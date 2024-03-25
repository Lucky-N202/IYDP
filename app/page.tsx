import Header from "@/app/header/page";
import Contact from "@/app/contact/page";
import About from "@/app/about/page"
import Projects from "@/app/projects/page";
import Footer from "@/app/footer/page";

import logo from "@/public/images/logo.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <main className=" shadow-lg ">
       <Header  />

       
        <div className="flex justify-center items-center ">
        <div
          className="text-center"
        >
         <Image src={logo} alt="" className=" w-1/2 h-1/2 mx-auto mb-4" /> 
          <p className="text-lg text-gray-800">An organisation focusing on fixing the minds of young teenagers towards their future and goals.</p>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

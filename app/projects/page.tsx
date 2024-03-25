import Image from "next/image";

import image1 from "@/public/images/image1.jpg";
import image2 from "@/public/images/image2.jpg";
import image3 from "@/public/images/image3.jpg";
import image4 from "@/public/images/image4.jpg";
import image5 from "@/public/images/image5.jpg";
import image6 from "@/public/images/image6.jpg";
import image7 from "@/public/images/image7.jpg";
import image8 from "@/public/images/image8.jpg";
import image9 from "@/public/images/image9.jpg";



const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9
  ];

  
const Projects = () => {


  return (
    
    <div className="bg-gray-200 ">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-gray-800 text-4xl font-bold text-center mb-8">Gallery</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 shadow-lg border-solid border-gray-800">
        {images.map((image) => (
       
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <Image
                src={image}
                alt=""
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
           
        ))}
      </div>
    </div>
  </div>

  )
}

export default Projects
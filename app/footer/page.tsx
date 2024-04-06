

function Footer () {
  return (
    
    
    <footer className=" bg-gradient-to-t from-white to-blue-950  text-black py-8 m-4 shadow-md rounded-lg">
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between border-b-4 border-black border-dashed">
        {/* About Section */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm mb-2">Initiative Youth Development Programme (IYDP) is an organization focused on guiding and empowering young teenagers to reach their full potential and achieve their goals.</p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="list-none text-sm">
            <li className="mb-2 hover:text-gray-200 hover:underline"><a href="/about">About Us</a></li>
            <li className="mb-2 hover:text-gray-200 hover:underline"><a href="/projects">Projects</a></li>
            <li className="mb-2 hover:text-gray-200 hover:underline"><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="list-none text-sm">
            <li className="mb-2 hover:text-gray-200 hover:underline"><a href="#">Facebook</a></li>
            <li className="mb-2 hover:text-gray-200 hover:underline"><a href="#">Twitter</a></li>
            <li className="mb-2 hover:text-gray-200 hover:underline"><a href="#">Instagram</a></li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Events</h3>
          <p> Coming soon </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Initiative Youth Development Programme (IYDP). All rights reserved.</p>
      </div>
    </div>
  </footer>
    
    
  )
}

export default Footer
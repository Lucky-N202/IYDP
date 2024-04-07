

import React from 'react'
import DrawOutlineButton from '../components/drawoutlinebtn'



function Contact() {
  return (
    
  <div className="container mx-auto py-8">
    <h1 className="text-4xl font-bold text-gray-800 pl-6 mb-8 text-center">Contact us</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Form */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-blue-950 w-[90%] ml-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Send us a message</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Your Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-slate-600 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Your Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-slate-600 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Your Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-slate-600 rounded-md focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <DrawOutlineButton type="submit" className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gradient-to-t from-blue-950 to-white hover:text-gray-800 focus:outline-none">Send Message</DrawOutlineButton>
        </form>
      </div>
      {/* Contact Information */}
      <div className=" bg-gradient-to-b from-blue-950 w-[90%] ml-4 to-white text-blue-750 p-6  rounded-lg shadow-md">
        <h2 className="text-2xl  font-bold mb-6">Contact Information</h2>
        <p className="text-lg font-semibold mb-2">Address</p>
        <p className="mb-4">1302 Block T Soshanguve, Pretoria</p>
        <p className="text-lg font-semibold mb-2">Phone</p>
        <p className="mb-4">076 792 0006</p>
        <p className="text-lg font-semibold mb-2">Email</p>
        <p className="mb-4">initiativeyouthdp18@gmail.com</p>
     </div>
    </div>
  </div>

  )
}

export default Contact
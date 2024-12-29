import React from 'react'
import { FaProjectDiagram, FaTools, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      {/* Header Section */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-semibold text-blue-600 dark:text-blue-400">Welcome to My Portfolio Dashboard</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Explore my projects, skills, and contact information. Let's collaborate and create amazing things together.
        </p>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

        {/* Projects Overview */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
            <FaProjectDiagram className="mr-3 text-blue-500" />
            Projects
          </h2>
          <ul className="mt-6 space-y-6">
            <li className="text-lg text-gray-600 dark:text-gray-400">
              <strong className="text-blue-600">E-commerce Web App:</strong> A fully responsive platform for online shopping with payment gateway integration.
            </li>
            <li className="text-lg text-gray-600 dark:text-gray-400">
              <strong className="text-blue-600">Blogging Platform:</strong> A blog system that allows users to create and share posts, with authentication and comments features.
            </li>
            <li className="text-lg text-gray-600 dark:text-gray-400">
              <strong className="text-blue-600">Portfolio Website:</strong> A personal website showcasing my skills, projects, and experience.
            </li>
          </ul>
        </div>

        {/* Skills Overview */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
            <FaTools className="mr-3 text-blue-500" />
            Skills
          </h2>
          <ul className="mt-6 space-y-4">
            <li className="text-lg text-gray-600 dark:text-gray-400">JavaScript (React, Node.js, Express.js)</li>
            <li className="text-lg text-gray-600 dark:text-gray-400">HTML & CSS (Tailwind CSS, Bootstrap)</li>
            <li className="text-lg text-gray-600 dark:text-gray-400">TypeScript</li>
            <li className="text-lg text-gray-600 dark:text-gray-400">MongoDB, MySQL</li>
            <li className="text-lg text-gray-600 dark:text-gray-400">Version Control (Git, GitHub)</li>
          </ul>
        </div>

        {/* Contact Overview */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 col-span-2 xl:col-span-1">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
            <FaEnvelope className="mr-3 text-blue-500" />
            Contact Information
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            <strong className="text-blue-600">Email:</strong> abuhosainmin@gmail.com
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            <strong className="text-blue-600">Phone:</strong> +8801319539510
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            <strong className="text-blue-600">LinkedIn:</strong> 
            <a href="https://linkedin.com/in/yourprofile" className="text-blue-500 hover:text-blue-400 transition duration-200">
              linkedin.com/in/abuhosain25
            </a>
          </p>
        </div>

      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Abu Hosain. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default page;

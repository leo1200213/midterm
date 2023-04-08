import React from 'react';
import services from "./services";

function App() {
  services.user.getAll().then((data) => {
    console.log(data);
  }); 
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Hello, I'm Leo</h1>
      <p className="text-lg text-gray-700 mb-8">Welcome to my personal website!</p>
      <img src="https://source.unsplash.com/random" alt="Random Image" className="rounded-full w-20 h-20 object-cover mb-4" />
      <p className="text-lg text-gray-700 mb-4">I'm a frontend developer. I have experience building web applications using React and other modern web technologies.</p>
      <p className="text-lg text-gray-700 mb-4">On this website, you can find more information about my skills, projects, and experience. Please feel free to contact me if you have any questions or inquiries.</p>
      <div className="flex space-x-4">
        <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Resume
        </a>
        <a href="#" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default App;

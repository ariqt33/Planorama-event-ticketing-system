import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const heroImages = [
  { src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/0fd369155354881.6352c6047d7fa.jpg" },
  { src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/83342885752951.5d84f50135aa6.jpg" },
  { src: "https://static01.nyt.com/images/2019/08/16/arts/16listings-art/merlin_156057081_c14b61d4-567c-4314-a7e6-c3ebb0399e1d-superJumbo.jpg" },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % heroImages.length);
  const prev = () => setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <img
        src={heroImages[current].src}
        alt=""
        className="w-full h-full object-cover transition-all duration-700"
      />
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-gray-300"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-gray-300"
      >
        &#8594;
      </button>
    </section>
  );
}

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <nav className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-black text-white shadow-md">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img
            src="https://i.pinimg.com/736x/e1/69/82/e16982af3f8b53df2fb04eb80ddf4938.jpg"
            alt="Planorama Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
        <div className="flex-1 flex justify-center w-full md:w-auto mb-4 md:mb-0">
          <form className="max-w-lg w-full">
            <div className="flex">
              <input
                type="search"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-s-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search events, concerts..."
                required
              />
              <button
                type="submit"
                className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <ul className="flex gap-6 text-lg font-medium items-center">
          <li className="hover:text-yellow-400 cursor-pointer">Concerts</li>
          <li className="hover:text-yellow-400 cursor-pointer">Events</li>
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 min-w-[150px] bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">About Us</li>
                <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">How to Use</li>
                <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Planorama Features</li>
                <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Where is my ticket?</li>
              </ul>
            </div>
          </li>
       <li>    
    <Link to="/login" className="hover:text-yellow-400 cursor-pointer">
      Login
    </Link>
  </li>
  <li/>
     <li>    
    <Link to="/signup" className="hover:text-yellow-400 cursor-pointer">
      Sign Up
    </Link>
  </li>
  </ul>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold title hero  mb-4">planorama</h2>
          <p className="text-lg font-subtitle text-gray-700 mb-6">
            Planorama is your ultimate guide to unforgettable experiences.
             Discover concerts, festivals, exhibitions, and cultural events all in one place.
            Buy tickets, explore events, and plan your perfect outing with ease.
          </p>
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow">
            Learn More
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/cac2a6126387577.612df1d2d3fc4.png" alt="Event 1" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1">Escape Memories</h3>
            <p className="text-sm text-gray-600">Music Festival • 12 Dec 2025</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ccfc6150314037.62f7d34c3a8b9.jpg" alt="Event 2" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1">Summer Beats</h3>
            <p className="text-sm text-gray-600">Music Festival • 15 Jan 2026</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/72911880730175.5d0426e7e3717.jpg" alt="Event 3" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1">Rock & Roll Night</h3>
            <p className="text-sm text-gray-600">Concert • 28 Feb 2026</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/f468d449695163.58bf60c1794d1.jpg" alt="Event 4" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1">Jazz Night</h3>
            <p className="text-sm text-gray-600">Concert • 10 Mar 2026</p>
          </div>
        </div>

         <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/f468d449695163.58bf60c1794d1.jpg" alt="Event 4" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1">Jazz Night</h3>
            <p className="text-sm text-gray-600">Concert • 10 Mar 2026</p>
          </div>
        </div>

         <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/f468d449695163.58bf60c1794d1.jpg" alt="Event 4" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1">Jazz Night</h3>
            <p className="text-sm text-gray-600">Concert • 10 Mar 2026</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-6 text-center mt-auto">
        <p>&copy; 2025 Planorama. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

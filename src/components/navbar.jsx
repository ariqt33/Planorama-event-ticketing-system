import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black px-8 py-4 flex items-center justify-between shadow-md fixed w-full z-50">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-yellow-400"
        >
          <path d="M12 2L15 8H9L12 2Z" />
        </svg>
        <span className="font-giaza italic text-2xl text-white tracking-wide">
          planorama
        </span>
      </Link>

      {/* Search Bar */}
      <div className="flex-1 max-w-lg mx-6">
        <form className="flex">
          <input
            type="search"
            className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-s-lg border border-gray-300 focus:ring-yellow-400 focus:border-yellow-400"
            placeholder="Search events, concerts..."
            required
          />
          <button
            type="submit"
            className="p-2.5 text-sm font-medium text-white bg-yellow-500 rounded-e-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300"
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
        </form>
      </div>

      {/* Menu */}
      <ul className="flex gap-6 text-lg font-medium items-center text-white">
        <li><Link to="/concerts" className="hover:text-yellow-400 cursor-pointer">Concerts</Link></li>
        <li><Link to="/events" className="hover:text-yellow-400 cursor-pointer">Events</Link></li>
        <li className="relative group">
          <button className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div className="absolute left-0 mt-2 min-w-[150px] bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
            <ul>
              <li><Link to="/aboutus" className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">About Us</Link></li>
              <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">How to Use</li>
              <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Planorama Features</li>
              <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Where is my ticket?</li>
            </ul>
          </div>
        </li>
        <li><Link to="/login" className="hover:text-yellow-400 cursor-pointer">Login</Link></li>
        <li><Link to="/signup" className="hover:text-yellow-400 cursor-pointer">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

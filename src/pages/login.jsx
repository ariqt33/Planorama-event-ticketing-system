import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <nav className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-black text-white shadow-md">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Link to="/">
            <img
              src="https://i.pinimg.com/736x/e1/69/82/e16982af3f8b53df2fb04eb80ddf4938.jpg"
              alt="Planorama Logo"
              className="w-20 h-20 object-contain cursor-pointer"
            />
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white p-6 text-center mt-auto">
        <p>&copy; 2025 Planorama. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

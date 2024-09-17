import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5 fixed top-0 left-0 right-0 shadow-md gap-1 sm:gap-0">
      {/* logo name */}
      <div className="font-bold text-3xl">
        <Link to="/">CDYSEC</Link >
      </div>

      {/* list of nav */}
      <ul className="flex gap-5 text-lg font-semibold text-gray-600 ml-5">
        <li>About</li>
        <li>Contact</li>
        <li>Log In</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  )
}
export default Navbar;
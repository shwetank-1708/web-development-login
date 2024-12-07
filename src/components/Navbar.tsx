import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <ul className="flex justify-around bg-gray-400 h-11 items-center font-bold text-white">
          <div>
            <NavLink to="/">
              <p>LogIn</p>
            </NavLink>
          </div>

          <div>
            <NavLink to="/signup">
              <p>Sing Up</p>
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

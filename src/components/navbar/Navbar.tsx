import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="cards">Cards</NavLink>
            <NavLink to="add">Add</NavLink>
          </nav>
        </header>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;

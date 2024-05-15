import { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import useAuth from "../../hooks/useAuth";
import { LuMoonStar } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
import Logo from "../Logo/Logo";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const { currentUser } = useAuth();
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    if(theme === "dark") {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const navList = (
    <ul className="mt-2 mb-4 px-4 flex flex-col gap-2 lg:px-0 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium hover:text-light-blue-800"
      >
        <NavLink to="/" className="flex items-center">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium hover:text-light-blue-800"
      >
        <NavLink to="/books" className="flex items-center">
          All Books
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky px-0 top-0 z-10 h-max max-w-full rounded-none py-2">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between text-blue-gray-900">
        {/* Logo */}
        <Logo />

        {/* NavLinks */}
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          {theme === "light" ? (
            <IconButton
            size="sm"
            variant="text"
            onClick={handleThemeChange}
            className="border hover:bg-light-blue-50"
          >
            <LuMoonStar />
          </IconButton>
          ) : (
            <IconButton
            size="sm"
            variant="text"
            onClick={handleThemeChange}
            className="border hover:bg-light-blue-50"
          >
            <LuSun />
          </IconButton>
          )}
          {currentUser ? (
            <ProfileMenu />
          ) : (
            <div className="flex items-center gap-x-1">
              <Link to="/login">
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block hover:text-light-blue-600"
                >
                  <span>Log In</span>
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button
                  variant="gradient"
                  color="light-blue"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Sign up</span>
                </Button>
              </Link>
            </div>
          )}

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

      <Collapse open={openNav}>
        {navList}
        {!currentUser && (
          <div className="flex items-center px-4 gap-x-2">
            <Link to="/login" className="w-full">
              <Button fullWidth className="" variant="text" size="sm">
                <span>Log In</span>
              </Button>
            </Link>
            <Link to="/sign-up" className="w-full">
              <Button fullWidth variant="gradient" color="light-blue" size="sm">
                <span>Sign up</span>
              </Button>
            </Link>
          </div>
        )}
      </Collapse>
    </Navbar>
  );
};
export default Header;

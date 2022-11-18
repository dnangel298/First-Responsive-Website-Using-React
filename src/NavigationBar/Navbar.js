import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth > 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="lg-flex-row mb-4 mt-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:items-center lg:gap-3">
      <Link to="signin" className="flex items-center">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="font-mono p-1 font-medium"
        >
          Sign In
        </Typography>
      </Link>

      <Link to="docs" activeClassName="flex items-center">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="font-mono p-1 font-medium"
        >
          Docs
        </Typography>
      </Link>

      <Link to="faq" activeClassName="flex items-center">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="font-mono p-1 font-medium"
        >
          FAQ
        </Typography>
      </Link>

      <Menu>
        <MenuHandler>
          <Button variant="gradient" size="sm" color="gray">
            <Typography className="font-mono p-0 text-xs" variant="small">
              Account Settings
            </Typography>
          </Button>
        </MenuHandler>

        <MenuList>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </MenuList>
      </Menu>
    </ul>
  );
  return (
    <>
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 shadow-md shadow-blue-400/30 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <Typography
              as="a"
              variant="small"
              className="font-mono mr-4 cursor-pointer py-1.5 font-bold"
            >
              <span>Your Asian Team</span>
            </Typography>
          </Link>
          <div className="hidden lg:block">{navList}</div>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <a href="/admin">
              <span>Admin Panel</span>
            </a>
          </Button>
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
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <a href="*">
              <span>Admin Panel</span>
            </a>
          </Button>
        </MobileNav>
      </Navbar>
      <Outlet />
    </>
  );
}

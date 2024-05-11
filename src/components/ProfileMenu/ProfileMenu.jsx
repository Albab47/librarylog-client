import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";

import {
  BookOpenIcon,
  ChevronDownIcon,
  PlusCircleIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";


const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {currentUser, logOut} = useAuth()

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={currentUser?.photoURL}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem
          onClick={closeMenu}
          className={`flex items-center gap-2 rounded`}
        >
          <PlusCircleIcon className="size-4" />
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color="inherit"
          >
            Add Book
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={closeMenu}
          className={`flex items-center gap-2 rounded`}
        >
          <BookOpenIcon className="size-4" />
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color="inherit"
          >
            Borrowed Books
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={closeMenu}
          className={`flex items-center gap-2 text-red-400 rounded`}
        >
          <ArrowLeftStartOnRectangleIcon className="size-4" />
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color="inherit"
            onClick={() => logOut()}
          >
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;

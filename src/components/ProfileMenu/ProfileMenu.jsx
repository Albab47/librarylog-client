import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import userIcon from '../../assets/icons8-user-94.png';

import {
  BookOpenIcon,
  ChevronDownIcon,
  PlusCircleIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logOut } = useAuth();

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogOut = async () => {
    await logOut();
    toast.success("Logout Successful");
  };

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
            className="border-2 border-yellow-400"
            src={currentUser?.photoURL || userIcon}
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
          className={`space-y-1 rounded`}
        >
          <Typography
            as="span"
            variant="small"
            className="font-medium"
            color="light-blue"
          >
            {currentUser?.displayName}
          </Typography>
          <Typography
            as="small"
            variant="small"
            className="text-xs"
            color="gray"
          >
            {currentUser?.email}
          </Typography>
        </MenuItem>
        <Link to="/add-book">
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
        </Link>
        <Link to={"/borrowed-books"}>
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
        </Link>
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
            onClick={handleLogOut}
          >
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;

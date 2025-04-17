import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router";
import { Avatar, Badge, IconButton } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartItemNo = useSelector((state) => state.carts).length;

  return (
    <nav className="w-full h-14 bg-blue-900">
      <div className="container px-10 h-full">
        <div className="flex justify-between h-full items-center ">
          <div>
            <Link
              to={"/"}
              className="hover:underline duration-150  text-white select-none text-2xl"
            >
              Add Products
            </Link>
          </div>
          <div className="flex gap-x-3 items-center ">
            <Link to={"/cart"} className="text-white">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={cartItemNo} color="error">
                  <ShoppingCartRoundedIcon />
                </Badge>
              </IconButton>
            </Link>{" "}
            <Avatar
              alt="Remy Sharp"
              src="https://res.cloudinary.com/ddqzfqu1j/image/upload/v1741307727/WhatsApp_Image_2024-07-14_at_20.00.12_5f274665_wgicry.jpg"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

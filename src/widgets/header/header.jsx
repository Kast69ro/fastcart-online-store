import { Link, useNavigate } from "react-router-dom";
import logo from "#/Group 1116606595.png";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../entities/api/account/account";
import { getCart } from "../../entities/api/cart/cart";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.cart.dataCart);
  const wishlistCount = useSelector(
    (state) => state.wishlist.items?.length || 0
  );

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleGetUser = () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const decoded = jwtDecode(token);
    dispatch(getUserById(decoded.sid));
    setAnchorEl(null);
    navigate("/account");
  };

  const token = localStorage.getItem("token");

  const [openDrawer, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
        <Link to='/'>
          <ListItemButton>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
                  </Link>
        </ListItem>

        <ListItem disablePadding>
          <Link to='/contact'>
          <ListItemButton>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
                  </Link>
        </ListItem>

        <ListItem disablePadding>
          <Link to='/about'>
          <ListItemButton>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
              </svg>
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
                  </Link>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <div className="flex items-center justify-between p-[10px_0px] lg:p-[10px_20px] border-b border-[grey] w-full max-w-[1920px] mx-auto">
        <Link to="/">
          <img className="hidden lg:block" src={logo} alt="logo" />
        </Link>

        <div className="flex items-center lg:hidden">
          <div>
            <Button sx={{ color: "black" }} onClick={toggleDrawer(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>
          <h2 className="text-[24px] font-bold">Exclusive</h2>
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-[30px] list-none">
            <li className="relative text-black hover:text-red-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-red-600 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="relative text-black hover:text-red-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-red-600 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="relative text-black hover:text-red-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-red-600 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="relative text-black hover:text-red-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-red-600 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300">
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </div>

        {token ? (
          <div className="flex  items-center gap-[10px] lg:gap-[20px]">
            <div className="relative inline-block w-[10x] h-[10px]">
              <button className="flex items-center justify-center">
                <Link to="/wishlist">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </Link>
              </button>
              <h1 className="absolute -top-3 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-[1px] leading-none">
                {wishlistCount}
              </h1>
            </div>
            <div className="relative inline-block w-[10px] h-[10px]">
              <button onClick={handleCartClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
              <h1 className="absolute -top-3 -right-6 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-[1px] leading-none">
                {products?.productsInCart?.length || 0}
              </h1>
            </div>
            <div className="w-[10x] h-[25px]">
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                disableRipple
                sx={{
                  backgroundColor: "transparent",
                  color: "inherit",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:focus": {
                    outline: "none",
                    boxShadow: "none",
                  },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </Button>

              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                PaperProps={{
                  sx: {
                    padding: "15px",
                  },
                }}
                MenuListProps={{
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  },
                }}
              >
                <MenuItem onClick={handleGetUser}>
                  <div className="flex gap-[10px] items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <p>Account</p>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/wishlist">
                    <div className="flex gap-[10px] items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>

                      <p>Wishlist</p>
                    </div>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/log-in"
                    onClick={() => {
                      localStorage.removeItem("token");
                      handleClose();
                    }}
                  >
                    <div className="flex gap-[10px] items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                        />
                      </svg>

                      <p>Logout</p>
                    </div>
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
        ) : (
          <Link
            to="/log-in"
            className="text-white hover:text-white bg-red-500 p-[10px_20px] rounded-[10px] hover:underline underline-offset-4"
          >
            Log In
          </Link>
        )}
      </div>
      <Toaster richColors position="bottom-right" />
    </>
  );
}

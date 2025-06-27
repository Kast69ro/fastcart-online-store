import { Link, useNavigate } from "react-router-dom";
import logo from "#/Group 1116606595.png";
import { Toaster } from "sonner";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { getUserById } from "../../entities/api/account/account";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleCartClick = () => {
    if (localStorage.getItem("token")) {
      navigate("/cart");
    } else {
      navigate("/log-in");
    }
  };

  const handleGetUser = () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const decoded = jwtDecode(token);
    dispatch(getUserById(decoded.sid));
    setAnchorEl(null)
    navigate("/account");
  };

  return (
    <>
      <div className="flex items-center justify-between p-[10px_20px] border-b border-[grey]">
        <img className="hidden lg:block" src={logo} alt="logo" />

        <div className="flex items-center lg:hidden">
          <h1>=</h1>
          <h2 className="text-[24px] font-bold">Exclusive</h2>
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-[30px] list-none">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-[20px]">
          <button>
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
          </button>
          <button onClick={handleCartClick}>
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
          <div>
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
                className="size-6"
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
                <Link>
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
                <Link to="/log-in">
                  <div
                    className="flex gap-[10px] items-center"
                    onClick={() => localStorage.removeItem("token")}
                  >
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
      </div>
      <Toaster richColors position="bottom-right" />
    </>
  );
}

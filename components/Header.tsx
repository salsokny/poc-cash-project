"use client";

import {
  AppBar,
  Toolbar,
  Avatar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Dialog
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import IconQuestion from "@/public/icons/question";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer
  const [openDialog, setOpenDialog] = useState(false);

  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  // Helper function to check if the link is active
  const isActive = (link: string) => pathname === link;

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleNavigation = (link: string) => {
    router.push(link);
    setDrawerOpen(false); // Close the drawer after navigation
  };

  const handleToSettingPage = () => {
    router.push("/setting");
  };

  const handleToHome = () => {
    router.push("/home")
  }

  // Open the modal
  const handleLogout = () => {
    setOpenDialog(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="w-full">
      <AppBar position="static" className="!bg-white shadow-md" elevation={0}>
        <Toolbar className="container !bg-white mx-auto max-w-6xl flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex justify-start gap-16">
            <div onClick={handleToHome} className="flex cursor-pointer items-center space-x-2">
              <Image
                src="/images/logo-not-border.png" // The image is inside the public folder
                alt="Logo"
                width={150}
                height={150}
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/home"
                className={`${
                  isActive("/home")
                    ? "!text-[#6DB33F] !text-[16px] !font-semibold"
                    : "!text-[#7B93A4] !text-[16px] !font-normal"
                }`}
              >
                Home
              </Link>
              <Link
                href="/income"
                className={`${
                  isActive("/income")
                    ? "!text-[#6DB33F] !text-[16px] !font-semibold"
                    : "!text-[#7B93A4] !text-[16px] !font-normal"
                }`}
              >
                Income
              </Link>
              <Link
                href="/expense"
                className={`${
                  isActive("/expense")
                    ? "!text-[#6DB33F] !text-[16px] !font-semibold"
                    : "!text-[#7B93A4] !text-[16px] !font-normal"
                }`}
              >
                Expense
              </Link>
              <Link
                href="/budget"
                className={`${
                  isActive("/budget")
                    ? "!text-[#6DB33F] !text-[16px] !font-semibold"
                    : "!text-[#7B93A4] !text-[16px] !font-normal"
                }`}
              >
                Budget
              </Link>
            </div>

            {/* Mobile Menu and Profile Section */}
            <div className="md:hidden flex items-center space-x-4">
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <div onClick={handleToSettingPage} className="cursor-pointer">
                <Avatar alt="Cindy Baker" src="/images/avatar.png" />
              </div>
            </div>
          </div>

          {/* Profile and Logout */}
          <div className="flex items-center space-x-2">
            <div
              onClick={handleToSettingPage}
              className="w-full cursor-pointer hidden md:flex"
            >
              <Avatar alt="Cindy Baker" src="/images/avatar.png" />
            </div>
            <Divider
              className="!ml-4 hidden md:flex"
              orientation="vertical"
              sx={{
                borderColor: "#E5E7EB", // Custom border color (green)
                borderWidth: 1, // Custom border width
                height: "30px", // Custom height for the divider
              }}
            />
            <Button
              onClick={handleLogout}
              variant="text"
              className="!text-[#7B93A4] !text-[16px] !font-medium capitalize !hidden md:!flex"
            >
              Logout
            </Button>
          </div>
        </Toolbar>

        {/* Drawer for Mobile Navigation */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <div className="w-64 p-4">
            <List>
              <ListItem  onClick={() => handleNavigation("/home")}>
                <ListItemText
                  primary="Home"
                  className={`${
                    isActive("/home")
                      ? "!text-[#6DB33F] !font-semibold"
                      : "!text-[#7B93A4]"
                  }`}
                />
              </ListItem>
              <ListItem  onClick={() => handleNavigation("/income")}>
                <ListItemText
                  primary="Income"
                  className={`${
                    isActive("/income")
                      ? "!text-[#6DB33F] !font-semibold"
                      : "!text-[#7B93A4]"
                  }`}
                />
              </ListItem>
              <ListItem  onClick={() => handleNavigation("/expense")}>
                <ListItemText
                  primary="Expense"
                  className={`${
                    isActive("/expense")
                      ? "!text-[#6DB33F] !font-semibold"
                      : "!text-[#7B93A4]"
                  }`}
                />
              </ListItem>
              <ListItem  onClick={() => handleNavigation("/budget")}>
                <ListItemText
                  primary="Budget"
                  className={`${
                    isActive("/budget")
                      ? "!text-[#6DB33F] !font-semibold"
                      : "!text-[#7B93A4]"
                  }`}
                />
              </ListItem>
            </List>
            <Divider />
            <div className="mt-4 flex justify-center">
              <Button
                variant="text"
                onClick={handleLogout}
                className="!text-[#7B93A4] !font-medium"
              >
                Logout
              </Button>
            </div>
          </div>
        </Drawer>
      </AppBar>
      {/* // Dialog */}
      {/* Dialog Component for Logout */}
        <Dialog open={openDialog} onClose={handleClose} sx={{
            "& .MuiDialog-paper": {
              borderRadius: "10px", // Apply border-radius to the paper element
            },
          }}>
          <div className="flex flex-col gap-4 !pt-3 md:!pt-6 !pb-6 md:!pb-8 px-8 md:!px-12">
            <div className="flex justify-center">
              <IconQuestion  />
            </div>
            <p className="!text-[#000000] !text-center text-[18px] md:!text-[20px] !font-semibold !py-1">
              Are you sure you want to <br /> Logout?
            </p>

            <div className="flex justify-around gap-6 !w-full !pt-[10px]">
              <Button  size="small" variant="outlined" onClick={handleClose} className="!border-[#6DB33F] !w-[100%]">
                <p className="!text-[#6DB33F] !text-[16px] md:!text-[18px] !font-medium"> Yes </p>
              </Button>
              <Button size="small" onClick={handleClose} className="!bg-[#FCE444] !border-[#FCE444] !w-[100%] !px-[20px]">
                <p className="!text-[#000000] !text-[16px] md:!text-[18px] !font-medium"> No </p>
              </Button>
            </div>
          </div>
        </Dialog>
    </div>
  );
}

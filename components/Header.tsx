"use client";

import { AppBar, Toolbar, Avatar, Button, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Header() {
   const router = useRouter();
  const pathname = usePathname(); // Get the current path
  // Helper function to check if the link is active
  const isActive = (link: string) => pathname === link;

  const handleToSettingPage = () => {
    router.push("/setting");
    con
  }

   return (
    <AppBar position="static" className="!bg-white shadow-md" elevation={0}>
      <Toolbar className="container !bg-white mx-auto max-w-6xl flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex justify-start gap-16">
          <div  className="flex items-center space-x-2">
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
        </div>

        {/* Profile and Logout */}
        <div className="flex items-center space-x-2">
          <div  onClick={handleToSettingPage} className="w-full" >
          <Avatar alt="Cindy Baker" src="/images/avatar.png" />
          </div>
          <Divider
          className="!ml-4"
            orientation="vertical"
            
            sx={{
              borderColor: "#E5E7EB", // Custom border color (green)
              borderWidth: 1, // Custom border width
              height: "30px", // Custom height for the divider
            }}
          />
          <Button
            variant="text"
            className="!text-[#7B93A4] !text-[16px] !font-medium capitalize"
          >
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

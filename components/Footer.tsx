"use client";

import { Container, Grid, Typography, Link, Divider, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Image from "next/image";
import { usePathname } from "next/navigation";

const  Footer= () => {
   const pathname = usePathname(); // Get the current path

  // Helper function to check if the link is active
  const isActive = (link: string) => pathname === link;
  return (
    <footer className="bg-[#FFFFFF] w-full  mt-12">
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Left Section - Logo and Description */}
          <Grid
            item
            xs={12}
            md={4}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo-not-border.png"
                alt="Logo"
                width={120}
                height={40}
                className="hover:scale-105 transition-transform"
              />
            </div>
            <Typography
              variant="body2"
              className="text-center md:text-left !text-[#7B93A4]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum.
            </Typography>
          </Grid>

          {/* Center Section - Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              className="font-semibold mb-4 !text-[#324C5B]"
            >
              About Us
            </Typography>
            <div className="flex flex-col space-y-4">
              <Link
               href="/home"
                className={`no-underline hover:text-[#6DB33F] transition-colors ${
                  isActive("/home")
                    ? "!text-[#6DB33F] text-[16px] !font-semibold"
                    : "!text-[#7B93A4] text-[16px] !font-normal"
                }`}
              >
                Home
              </Link>
              <Link
                 href="/income"
                className={`no-underline hover:text-[#6DB33F] transition-colors ${
                  isActive("/home")
                    ? "!text-[#6DB33F] text-[16px] !font-semibold"
                    : "!text-[#7B93A4] text-[16px] !font-normal"
                }`}
              >
                Income
              </Link>
              <Link
                href="/expense"
                className={`no-underline hover:text-[#6DB33F] transition-colors ${
                  isActive("/home")
                    ? "!text-[#6DB33F] text-[16px] !font-semibold"
                    : "!text-[#7B93A4] text-[16px] !font-normal"
                }`}
              >
                Expense
              </Link>
              <Link
                 href="/budget"
                className={`no-underline hover:text-[#6DB33F] transition-colors ${
                  isActive("/home")
                    ? "!text-[#6DB33F] text-[16px] !font-semibold"
                    : "!text-[#7B93A4] text-[16px] !font-normal"
                }`}
              >
                Budget
              </Link>
            </div>
          </Grid>

          {/* Right Section - Social Media */}
          <Grid
            item
            xs={12}
            md={4}
            className="flex flex-col items-center md:items-start"
          >
            <Typography
              variant="h6"
              className="font-semibold mb-4 !text-[#324C5B]"
            >
              Follow Us
            </Typography>
            <div className="flex space-x-4">
              <IconButton
                className="text-gray-600 hover:text-[#3b5998]"
                href="https://facebook.com"
                target="_blank"
              >
                <Facebook />
              </IconButton>
              <IconButton
                className="text-gray-600 hover:text-[#00acee]"
                href="https://twitter.com"
                target="_blank"
              >
                <Twitter />
              </IconButton>
              <IconButton
                className="text-gray-600 hover:text-[#C13584]"
                href="https://instagram.com"
                target="_blank"
              >
                <Instagram />
              </IconButton>
              <IconButton
                className="text-gray-600 hover:text-[#0077b5]"
                href="https://linkedin.com"
                target="_blank"
              >
                <LinkedIn />
              </IconButton>
            </div>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider className="my-6" sx={{ borderColor: "#E5E7EB" }} />

        {/* Bottom Section - Copyright */}
        <div className="text-center">
          <Typography variant="body2" className="text-gray-600">
            &copy; {new Date().getFullYear()} Your Company Name. All Rights
            Reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
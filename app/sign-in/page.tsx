"use client"; // To mark this as a client-side component
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import Image from "next/image"; // For logo image
import IonGoogle from "@/public/icons/google";
import IconFacebook from "@/public/icons/facebook";
import { useRouter } from "next/navigation";
import IconHidePassword from "@/public/icons/hidenPasswork";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form validation and submission logic
    if (!email || !password) {
      setError({
        email: !email ? "Email is required" : "",
        password: !password ? "Password is required" : "",
      });
    } else {
      setError({ email: "", password: "" });
      // Perform sign-in logic
    }
  };

  // const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the show/hide password state
  };

  const handleSignIn = () => {
    router.push('/home')
  }
  return (
    <div className="flex w-full h-screen ">
      {/* Right side: Logo */}
      <div className="hidden md:flex !h-full items-center justify-center w-1/2 bg-[#6DB33F]">
        <Image
          src="/images/logo.png" // The image is inside the public folder
          alt="Logo"
          width={200}
          height={200}
        />
      </div>

      {/* Left side: Form */}
      <div className=" w-full md:w-1/2 p-6 bg-white h-screen rounded-lg mb-5 px-6 md:px-20  pt-12 ">
        {/* Title */}
        <Typography
          variant="h4"
          className="!text-[#6DB33F] !text-[40px] !font-medium mb-9"
        >
          Sign in
        </Typography>

        {/* Social Login */}
        <div className="space-y-4 !w-full">
          <Button
            variant="outlined"
            className="!w-full !text-[16px] text-[#324C5B] border-[#C4CFD7] !rounded-full !font-normal !capitalize"
          >
            <div className="flex justify-around gap-2 !items-center !py-[5px]">
              <IonGoogle /> Continue with Google
            </div>
          </Button>
          <div className="h-1"></div>
          <Button
            variant="outlined"
            className="!w-full !text-[16px] text-[#324C5B] border-[#C4CFD7] !rounded-full !font-normal !capitalize"
          >
            <div className="flex justify-around gap-2 !items-center !py-[5px] ">
              <IconFacebook /> Continue with Facebook
            </div>
          </Button>
        </div>

        <div className="flex items-center justify-between my-8 mt-[40px]">
          <hr className="flex-grow border-t-2 border-[#E1E9EE]" />
          <span className="px-4 text-[#93A1AA] text-[18px] font-semibold">
            OR
          </span>
          <hr className="flex-grow border-t-2 border-[#E1E9EE]" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <label
              htmlFor="email"
              className="block text-[#324C5B] text-sm font-medium mb-[-5px]"
            >
              Email Address
            </label>
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!error.email}
              helperText={error.email}
              className="text-[12px] border-[#E1E9EE] border-[1px] !rounded-[12px]"
              InputProps={{
                classes: {
                  root: "rounded-[12px] border-[#E1E9EE] focus:ring-2 focus:ring-primary-500 focus:border-primary-500", // Rounded and focus effects
                  input: "text-sm", // Adjust input text size
                },
              }}
               sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "50px",
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#E1E9EE",
                      borderWidth: "1px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#93A1AA",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#6DB33F",
                    },
                  },
                  "& .MuiInputBase-input": {
                    fontSize: "14px",
                  },
                }}
            />
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="text-sm text-gray-600">
                Your Password
              </label>
              <div
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={togglePasswordVisibility}
                color="primary"
              >
                {/* Conditional rendering with both icon and text */}
                {showPassword ? (
                  <div className="flex justify-start gap-1 items-center">
                    <VisibilityIcon
                      sx={{ color: "#93A1AA" }}
                      fontSize="small"
                    />{" "}
                    <span className="!text-[14px] !text-[#93A1AA] font-medium">
                      Show
                    </span>
                  </div>
                ) : (
                  <div className="flex justify-start gap-1 items-center">
                    <IconHidePassword />{" "}
                    <span className="!text-[14px] !text-[#93A1AA] font-medium">
                      Hide
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Password Input Field */}
            <TextField
              id="password"
              variant="outlined"
              fullWidth
              type={showPassword ? "text" : "password"} // Toggle between password and text
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              error={!!error.password}
              helperText={error.password}
              className="text-sm border-gray-300 focus:ring-2 focus:ring-primary-500 rounded-lg" // Tailwind styles for border and focus
              InputProps={{
                classes: {
                  root: "rounded-lg border-gray-300 focus:ring-primary-500", // Border and focus ring
                  input: "text-sm", // Input text size
                },
              }}
               sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "50px",
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#E1E9EE",
                      borderWidth: "1px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#93A1AA",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#6DB33F",
                    },
                  },
                  "& .MuiInputBase-input": {
                    fontSize: "14px",
                  },
                }}
            />
          </div>
          <div className="flex justify-end mt-2 text-sm pt-4">
            <a
              href="/reset-password"
              className="hover:underline underline text-[#6DB33F] font-normal text-[15px]"
            >
              Forgot your password
            </a>
          </div>

          {/* Sign-in Button */}
          <div className="flex flex-col w-full">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-6 !bg-[#6DB33F]  w-[50%] !normal-case !rounded-[5px]"
              onClick={handleSignIn}
            >
              Sign in
            </Button>

            <div className="flex justify-start gap-1 items-center pt-4">
              <span className="text-[#666666] text-[15px] font-normal ">
                Don’t have an acount?
              </span>
              <span>
                {" "}
                <a
                  href="/create-account"
                  className="underline text-[#6DB33F] font-normal text-[15px]"
                >
                  Sign up
                </a>{" "}
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

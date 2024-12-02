"use client";

import { Button, TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import IconHidePassword from "@/public/icons/hidenPasswork";
import VisibilityIcon from "@mui/icons-material/Visibility";

const EnterNewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({ newPassword: "", confirmPassword: "" });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (newPassword: string) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{}|;:'",.<>?\\/`~]).{8,}$/;

    if (!passwordRegex.test(newPassword)) {
      setError({
        newPassword:
          "Use 8 or more characters with a mix of letters, numbers & symbols",
        confirmPassword: "Must the same new password",
      });
    } else {
      setError({ newPassword: "", confirmPassword: "" }); // Clear error if valid
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPassword(value);
    validatePassword(value); // Validate the password on each change
  };

  const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validatePassword(value); // Validate the password on each change
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword); // Toggle the show/hide password state
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      setError({
        newPassword: !newPassword ? "Password is required" : "",
        confirmPassword: !confirmPassword ? "Confirm password is required" : "",
      });
    } else {
      setError({ newPassword: "", confirmPassword: "" });
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-white md:bg-[#C4CFD7] flex justify-center items-center">
        <div className="bg-white  rounded-[10px] p-4  w-[600px] text-center">
          <div className="flex justify-center md:justify-start ">
            <Image
              src="/images/logo-not-border.png" // The image is inside the public folder
              alt="Logo"
              width={200}
              height={200}
              className="!rounded-full"
            />
          </div>

          {/* You can add more content here (e.g., form fields, buttons) */}
          <form onSubmit={handleSubmit} className="px-[20px]">
            <h2 className=" text-[20px] md:text-[22px] text-[#6DB33F] text-start font-normal">
              Please enter a new password <br /> below
            </h2>

            <div className="flex flex-col px-2 md:px-0 pt-4 pb-12">
              {/* New Password */}
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="text-sm text-gray-600">
                  New password *
                </label>
                <div
                  aria-label={
                    showNewPassword ? "Hide password" : "Show password"
                  }
                  onClick={toggleNewPasswordVisibility}
                  color="primary"
                >
                  {/* Conditional rendering with both icon and text */}
                  {showNewPassword ? (
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

              <TextField
                id="password"
                variant="outlined"
                fullWidth
                type={showNewPassword ? "text" : "password"} // Toggle between password and text
                value={newPassword}
                onChange={handlePasswordChange}
                placeholder="Enter your new password"
                error={!!error.newPassword} // Show error if validation fails
                helperText={error.newPassword} // Display the validation message
                className="text-sm border-gray-300 focus:ring-2 focus:ring-primary-500 rounded-lg" // Tailwind styles for border and focus
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px", // Adjusted to match your desired style
                    "& fieldset": {
                      borderColor: "#E1E9EE", // Default border color
                      borderWidth: "1px", // Ensure the border width is consistent
                    },
                    "&:hover fieldset": {
                      borderColor: "#93A1AA", // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#6DB33F", // Border color when focused
                    },
                  },
                  "& .MuiInputBase-input": {
                    fontSize: "12px", // Adjust input text size
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "14px", // Adjust error message size
                  },
                }}
              />

              {/* Confirm Password */}

              <div className="flex justify-between items-center mb-2 pt-6">
                <label htmlFor="password" className="text-sm text-gray-600">
                  Confirmed password*
                </label>
                <div
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  onClick={toggleConfirmPasswordVisibility}
                  color="primary"
                >
                  {/* Conditional rendering with both icon and text */}
                  {showConfirmPassword ? (
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

              <TextField
                id="password"
                variant="outlined"
                fullWidth
                type={showConfirmPassword ? "text" : "password"} // Toggle between password and text
                value={confirmPassword}
                onChange={handleConfirmChange}
                placeholder="Enter your new password"
                error={!!error.confirmPassword} // Show error if validation fails
                helperText={error.confirmPassword} // Display the validation message
                className="text-sm border-gray-300 focus:ring-2 focus:ring-primary-500 rounded-lg" // Tailwind styles for border and focus
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px", // Adjusted to match your desired style
                    "& fieldset": {
                      borderColor: "#E1E9EE", // Default border color
                      borderWidth: "1px", // Ensure the border width is consistent
                    },
                    "&:hover fieldset": {
                      borderColor: "#93A1AA", // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#6DB33F", // Border color when focused
                    },
                  },
                  "& .MuiInputBase-input": {
                    fontSize: "12px", // Adjust input text size
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "14px", // Adjust error message size
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className=" mt-[30px] md:mt-12 !bg-[#6DB33F] w-[40%] !normal-case !rounded-[5px] py-2 md:!py-3"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EnterNewPassword;

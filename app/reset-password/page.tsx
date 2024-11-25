"use client";

import { Button, TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ResetPassword = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');

    const [error, setError] = useState({ email: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form validation and submission logic
        if (!email) {
            setError({
                email: !email ? 'Email is required' : ''

            });
        } else {
            setError({ email: '' });
            // Perform sign-in logic
            router.push('/verify-code');
        }


    };

    return (
      <>
        <div className="w-full h-screen bg-white md:bg-[#C4CFD7] flex justify-center items-center">
          <div className="bg-white  rounded-[10px] p-4  w-[800px] text-center">
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
            <form onSubmit={handleSubmit}>
              <h2 className=" text-[20px] md:text-[28px] text-[#6DB33F] font-bold">
                Forgot your password ?
              </h2>
              <p className=" text-[12px] md:text-sm mt-1 md:mt-2 text-[#00000070] pt-2 leading-[25px]">
                Please, enter your e-mail address below to receive your <br />{" "}
                user and a new password{" "}
              </p>

              <div className="flex flex-col px-2 md:px-28 pt-4 pb-12">
                <label
                  htmlFor="email"
                  className="block text-start text-[#324C5B] text-[12px] md:text-sm ml-1 font-medium mb-[8px]"
                >
                  Email Address
                </label>
                <TextField
                  placeholder="Enter your email address"
                  variant="outlined"
                  fullWidth
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!error.email}
                  helperText={error.email}
                  className="text-[12px] border-[#E1E9EE] border-[1px] !rounded-[12px]"
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
                  className=" mt-[30px] md:mt-12 !bg-[#6DB33F] w-[100%] !normal-case !rounded-[5px] py-2 md:!py-3"
                >
                  Reset Password
                </Button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
};

export default ResetPassword;

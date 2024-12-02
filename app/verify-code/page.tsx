"use client";

import { Button, TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
const VerifyCode = () => {
    const router = useRouter();
    const [code, setCode] = useState(Array(4).fill("")); // Ensure 6 inputs for the code
    const [error, setError] = useState(false); // Error state for validation

    // Refs for each input field
    const inputRefs = Array.from({ length: 4 }, () => React.createRef<HTMLInputElement>());

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;

        if (/^[0-9]?$/.test(value)) {
            // Update the code array with the new digit
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Move to the next input field if the user enters a digit
            if (index < 5 && value !== "") {
                const nextInput = inputRefs[index + 1].current;
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form validation and submission logic
        if (code.includes("")) {
            setError(true);
        } else {
            setError(false);
            router.push('/enter-new-password');
            // Submit the form logic (e.g., verifying the code)
        }
    };

    return (
      <div className="w-full h-screen bg-white md:bg-[#C4CFD7] flex justify-center items-center">
        <div className="bg-white rounded-[10px] p-4 w-[600px] text-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/logo-not-border.png"
              alt="Logo"
              width={200}
              height={200}
              className="!rounded-full"
            />
          </div>

          <form onSubmit={handleSubmit}>
            <h2 className="text-[20px] md:text-[28px] text-[#6DB33F] font-bold">
              Verify your code
            </h2>
            <p className="text-[12px] md:text-sm mt-1 md:mt-2 text-[#00000070] pt-2 leading-[30px]">
              Enter the passcode you just received on your email <br />
              address ending with ********in@gmail.com
            </p>

            <div className="flex flex-col !px-7 md:px-28 pt-4 pb-12">
              <div className="flex justify-center items-center">
                <div className="bg-white  rounded-lg w-[350px]">
                  <div className="flex justify-around mb-6 !gap-2 pt-2">
                    {code.map((digit, index) => (
                      <TextField
                        size="small"
                        key={index}
                        value={digit}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleChange(e, index)
                        }
                        type="text"
                        inputProps={{ maxLength: 1 }}
                        error={error && code.includes("")}
                        helperText={error && index === 0 ? "Invalid code" : ""}
                        sx={{
                          // Custom border for normal and focus states
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #6DB33F", // Set the border color and width
                            "&:hover": {
                              borderColor: "#6DB33F", // Border color on hover
                            },
                            "&.Mui-focused": {
                              borderColor: "#6DB33F", // Border color when focused
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "1px solid #6DB33F", // The outline when focused
                              },
                            },
                          },
                          input: {
                            textAlign: "center", // Center the text inside the input
                          },
                        }}
                        className="w-12 !text-[20px]  rounded-lg !border-none" // Ensure no Tailwind border here
                        inputRef={inputRefs[index]}
                      />
                    ))}
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="mt-[30px] md:mt-[20px] !bg-[#6DB33F] w-[90%] !normal-case !rounded-[5px] py-2 md:!py-3"
                  >
                    Verify
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default VerifyCode;

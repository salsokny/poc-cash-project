"use client"; // To mark this as a client-side component
import React, { useState } from "react";
import Image from "next/image"; // For logo image
import { useRouter } from "next/navigation";
import IconHidePassword from "@/public/icons/hidenPasswork";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CreateAccount = () => {
  const router = useRouter();
  const [gender, setGender] = useState<string>("Custom");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    selectedDate: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: "",
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "termsAccepted" ? checked : value,
    }));

    // Clear errors on input change
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.firstName)
      validationErrors = {
        ...validationErrors,
        firstName: "First name is required",
      };
    if (!formData.lastName)
      validationErrors = {
        ...validationErrors,
        lastName: "Last name is required",
      };

    if (!formData.gender)
      validationErrors = {
        ...validationErrors,
        gender: "Gender is required",
      };
    if (!validateEmail(formData.email))
      validationErrors = {
        ...validationErrors,
        email: "Enter a valid email address",
      };
    if (!validatePassword(formData.password))
      validationErrors = {
        ...validationErrors,
        password:
          "Password must have at least 8 characters, a number, and a special character",
      };
    if (formData.password !== formData.confirmPassword)
      validationErrors = {
        ...validationErrors,
        confirmPassword: "Passwords must match",
      };
    if (!formData.termsAccepted)
      validationErrors = {
        ...validationErrors,
        termsAccepted: "You must accept the terms and conditions",
      };

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted successfully:", formData);
      // Perform further actions such as API call
    }
  };

  const handleGenderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGender(event.target.value as string);
  };

  return (
    <div className="flex w-full h-screen pb-[50px]">
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
      <div className=" w-full md:w-1/2 p-6 bg-white h-screen rounded-lg mb-5 px-6 md:px-20 ">
        <div className="flex justify-end">
          <div className="w-[40px] h-[40px] rounded-full bg-[#C4C4C4]"></div>
        </div>
        <div className="flex flex-col">
          <p className="text-[32px] font-medium text-[#333333]">
            Create an account
          </p>

          <p className="text-[16px] font-normal text-[#333333]">
            Already have an account ?
            <span className="text-[#111111] text-[16px] font-normal underline ">
              Log in
            </span>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full pt-10">
          {/* First Name */}
          <label
            htmlFor="email"
            className="block text-[#324C5B] text-sm font-medium mb-2"
          >
            First Name
          </label>
          <TextField
            placeholder="Enter your first name"
            variant="outlined"
            fullWidth
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
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

          {/* Last Name */}
          <label
            htmlFor="email"
            className="block text-[#324C5B] text-sm font-medium mt-4 mb-2"
          >
            Last Name
          </label>
          <TextField
            placeholder="Enter your last name"
            variant="outlined"
            fullWidth
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
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

          {/* Gender and Date */}
          <label
            htmlFor="email"
            className="block text-[#324C5B] text-sm font-medium mt-4 mb-2"
          >
            Gender
          </label>
          <FormControl variant="outlined" sx={{ width: "30%" }}>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              value={gender}
              onChange={handleGenderChange}
              label="Gender"
              className="text-sm border-gray-300 focus:ring-2 focus:ring-primary-500 rounded-lg" // Tailwind styles for border and focus
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  "& fieldset": {
                    borderColor: "#6DB33F", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#6DB33F", // Border color when hovered
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#6DB33F", // Border color when focused
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: "12px", // Font size for the input text
                },
              }}
            >
              <MenuItem value="Custom">Custom</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>

          {/* <DatePicker label="Basic date picker" /> */}
          
         

          {/* Email */}
          <label
            htmlFor="email"
            className="block text-[#324C5B] text-sm font-medium mt-4 mb-2"
          >
            Email address
          </label>
          <TextField
            placeholder="Enter your email address"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
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

          {/* Password */}
          <label
            htmlFor="email"
            className="block text-[#324C5B] text-sm font-medium mt-4 mb-2"
          >
            Password
          </label>
          <TextField
            placeholder="Enter your password"
            type="password"
            variant="outlined"
            fullWidth
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
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
          <label
            htmlFor="email"
            className="block text-[#324C5B] text-sm font-medium mt-4 mb-2"
          >
            Confirm Password
          </label>
          <TextField
            placeholder=""
            type="password"
            variant="outlined"
            fullWidth
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
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

          {/* Terms and Conditions */}
          <div className="h-[20px]"></div>
          <FormControlLabel
            control={
              <Checkbox
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                color="primary"
              />
            }
            label="Show password"
          />

          {/* Submit Button */}

          <div className="flex justify-end w-full ">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className=" mt-[30px] md:mt-12 !text-[16px] md:!text-[18px] !font-medium !bg-[#6DB33F] w-[40%] !normal-case !rounded-[5px] py-2 md:!py-2"
            >
              Create an account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;

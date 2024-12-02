"use client";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";

const categories = [
  { id: 1, name: "Technology" },
  { id: 2, name: "Health" },
  { id: 3, name: "Education" },
  { id: 4, name: "Travel" },
  { id: 5, name: "Entertainment" },
];

const TransactionExpense = () => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value as string);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and an optional decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
      setError("");
    } else {
      setError("Invalid amount");
    }
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you can handle the form submission
    console.log("Form submitted with data:", {
      amount,
      selectedCategory,
      note,
      date,
    });

    // Clear form fields (optional)
    setAmount("");
    setSelectedCategory("");
    setNote("");
    setDate("");
  };

  return (
    <div className="w-full flex flex-col gap-4 pt-4">
      <p className="text-[#324C5B] text-[20px] md:text-[32px] font-semibold">
        My Income
      </p>
      <p className="text-[#324C5B] text-[16px] md:text-[20px] font-medium md:font-semibold pt-4">
        Transaction Expense
      </p>

      <div className="bg-[#FFFFFF] p-6 rounded-[10px] shadow-sm">
        <p className="text-[#324C5B] text-[16px] md:text-[18px] font-medium md:font-semibold pt-4">
          Please Input Your Expense
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-5">
            {/* Select Category */}
            <div className="flex flex-col gap-2">
              <p className="block text-[#324C5B] text-sm font-medium mb-1">
                Choose Category
              </p>
              <FormControl
                fullWidth
                sx={{
                  
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    height: "40px",
                    fontSize: "14px",
                    "& fieldset": { borderColor: "#6D7D9326" },
                    "&:hover fieldset": { borderColor: "#6DB33F" },
                    "&.Mui-focused fieldset": { borderColor: "#6DB33F" },
                  },
                }}
                variant="outlined"
                size="small"
              >
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                  labelId="category-select-label"
                  value={selectedCategory}
                  onChange={handleChange}
                  label="Category"
                  size="small"
                >
                  {categories.map((category) => (
                    <MenuItem key={category.id} value={category.name}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            {/* Date Picker */}
            <div className="flex flex-col gap-2">
               <p className="block text-[#324C5B] text-sm font-medium mb-1">
                 Date Time
              </p>
               <TextField
                  id="datetime"
                  variant="outlined"
                  type="datetime-local" // This allows both date and time input
                  fullWidth
                  value={date} // The value bound to your `date` state (in the correct format)
                  onChange={handleDateChange} // Your existing date change handler
                  placeholder="Select Date and Time" // Placeholder text
                  className="text-sm border-gray-300 focus:ring-2 focus:ring-primary-500 !rounded-[12px]"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      height: "40px",
                      fontSize: "14px",
                      "& fieldset": { borderColor: "#6D7D9326" },
                      "&:hover fieldset": { borderColor: "#6DB33F" },
                      "&.Mui-focused fieldset": { borderColor: "#6DB33F" },
                    },
                  }}
                />
            </div>
          </div>

          <div className="w-full pt-8">
            {/* Amount */}
            <p className="block text-[#324C5B] text-sm font-medium mb-1">
              Amount
            </p>
            <div className="relative">
              <TextField
                id="amount"
                variant="outlined"
                fullWidth
                type="text"
                value={amount}
                onChange={handleAmountChange}
                placeholder="Input Amount"
                error={!!error}
                helperText={error}
                className="text-sm border-gray-300 focus:ring-2 focus:ring-primary-500 !rounded-[12px]"
                InputProps={{
                  classes: {
                    root: "rounded-lg border-gray-300 focus:ring-primary-500",
                    input: "text-sm",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "45px",
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
              <p className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#93A1AA] text-sm font-medium">
                USD
              </p>
            </div>

            {/* Note */}
            <p className="block text-[#324C5B] text-sm font-medium mb-1 pt-6">
              Note (Optional)
            </p>
            <div className="relative">
              <TextField
                id="note"
                variant="outlined"
                fullWidth
                type="text"
                value={note}
                onChange={handleNoteChange}
                placeholder="Input Note"
                className="text-sm border-gray-300 focus:ring-2 focus:ring-primary-500 !rounded-[12px]"
                InputProps={{
                  classes: {
                    root: "rounded-lg border-gray-300 focus:ring-primary-500",
                    input: "text-sm",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "45px",
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

            <div className="flex justify-end gap-2">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className=" mt-[30px] !text-[18px] md:!text-[20px] md:mt-12 !bg-[#6DB33F] w-full md:w-[30%] !normal-case !rounded-[5px] !py-1 md:!py-2"
              >
                Add Income
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionExpense;

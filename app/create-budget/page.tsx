"use client";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent
} from "@mui/material";

const categories = [
  { id: 1, name: "Technology" },
  { id: 2, name: "Health" },
  { id: 3, name: "Education" },
  { id: 4, name: "Travel" },
  { id: 5, name: "Entertainment" },
];

const amounts = [
    {id: 1 , name: 10},
    {id: 2 , name: 20},
    {id: 3 , name: 150},
    {id: 4 , name: 106},
    {id: 5 , name: 107}
];

const CreateBudget = () => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBudgetAmount, setSelectedBudgetAmount] = useState("")
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [formError, setFormError] = useState({
    amount: "",
    selectedCategory: "",
    selectedBudgetAmount: "",
    date: "",
  });

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
  };

 const handleChangeAmount = (event: SelectChangeEvent<string>) => {
   setSelectedBudgetAmount(event.target.value);
 };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
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
  // const inputDate = new Date(e.target.value); // Create a Date object from the input value
  const formattedDateForInput = e.target.value; // Keep the value in the correct format for the input

  // Update the state
  setDate(formattedDateForInput); // Store the value for datetime-local
};

  const validateForm = () => {
    const errors = {
      amount: amount ? "" : "Amount is required",
      selectedCategory: selectedCategory ? "" : "Category is required",
      selectedBudgetAmount: selectedBudgetAmount ? "" : "Amount is required",
      date: date ? "" : "Date is required",
    };
    setFormError(errors);
    return !Object.values(errors).some((error) => error); // Return true if no errors
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, do not submit
    }

    // Here you can handle the form submission
    console.log("Form submitted with data:", {
      amount,
      selectedCategory,
      selectedBudgetAmount,
      note,
      date,
    });

    // Clear form fields (optional)
    setAmount("");
    setSelectedCategory("");
    setSelectedBudgetAmount("")
    setNote("");
    setDate("");
  };

  return (
    <div className="w-full flex flex-col gap-4 pt-4">
      <p className="text-[#324C5B] text-[20px] md:text-[32px] font-semibold">
       My Budget
      </p>
      <p className="text-[#324C5B] text-[16px] md:text-[20px] font-medium md:font-semibold pt-4">
       Transaction Budget
      </p>

      <div className="bg-[#FFFFFF] p-6 rounded-[10px] shadow-sm">
        <p className="text-[#324C5B] text-[16px] md:text-[18px] font-normal md:font-normal pt-4">
         Take control of your expenses and save money with budgets!
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 pt-5">
            {/* Select Category */}
            <div className="flex flex-col gap-2">
              <p className="block text-[#324C5B] text-sm font-medium mb-1">
               Budget name
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
                error={!!formError.selectedCategory}
              >
                <InputLabel id="category-select-label">Budget name</InputLabel>
                <Select
                  labelId="category-select-label"
                  value={selectedCategory}
                  onChange={handleChange}
                  label="Budget name"
                  size="small"
                >
                  {categories.map((category) => (
                    <MenuItem key={category.id} value={category.name}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {formError.selectedCategory && (
                <p className="text-red-500 text-xs">
                  {formError.selectedCategory}
                </p>
              )}
            </div>

{/* select amount  */}

            <div className="flex flex-col gap-2">
              <p className="block text-[#324C5B] text-sm font-medium mb-1">
              Amount
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
                error={!!formError.selectedBudgetAmount}
              >
                <InputLabel id="amount-select-label">Input amount</InputLabel>
                <Select
                  labelId="amount-select-label"
                  value={selectedBudgetAmount}
                  onChange={handleChangeAmount}
                  label="Input amount"
                  size="small"
                >
                  {amounts.map((item) => (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {formError.selectedBudgetAmount && (
                <p className="text-red-500 text-xs">
                  {formError.selectedBudgetAmount}
                </p>
              )}
            </div>

            {/* Date Picker */}
            <div className="flex flex-col gap-2">
              <p className="block text-start  text-[#324C5B] text-sm font-medium mb-1">
                Date Time
              </p>
              <div className="flex justify-end">
                <TextField
                  id="datetime"
                  variant="outlined"
                  type="datetime-local" // This allows both date and time input
                  fullWidth
                  value={date} // The value bound to your `date` state (in the correct format)
                  onChange={handleDateChange} // Your existing date change handler
                  error={!!formError.date} // Display error if there's an issue
                  helperText={formError.date} // Display the error message if any
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
                error={!!error || !!formError.amount}
                helperText={error || formError.amount}
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

            <div className="flex justify-end ">
              <Button
                type="submit"
                variant="contained"
                className=" mt-[30px] !text-[18px] md:!text-[20px] md:mt-12 !bg-[#6DB33F] w-full md:w-[30%] !normal-case !rounded-[5px] !py-0 md:!py-2"
                sx={{
                  backgroundColor: "#1D9B28",
                  width: "100%",
                  height: "50px",
                  borderRadius: "12px",
                  "&:hover": {
                    backgroundColor: "#1D9B28",
                  },
                }}
              >
                Add Expense
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBudget;

import React, { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Box,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { SketchPicker, ColorResult } from "react-color";
import { styled } from "@mui/material/styles";
import * as Icons from "@mui/icons-material";
import IconCategoryTale from "@/public/icons/categoryTable"
import { IconButton } from "@mui/material";
import IconsDelete from "@/public/icons/delete";
import IconEdit from "@/public/icons/edit";

const StyledIcon = styled("div")(({ color }: { color: string }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color,
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  margin: "0 auto",
}));

interface RowData {
  icon: React.ReactNode; // Icon component
  name: string; // Row name
}

const data: RowData[] = [
  {
    icon: <IconCategoryTale style={{ color: "white" }} />,
    name: "Transport"
  },
 
];

const CreateCategoryForm = () => {
  const selectRef = React.useRef<HTMLDivElement | null>(null);
  const [backgroundColor, setBackgroundColor] = useState<string>("#F58840");
  const [formData, setFormData] = useState({
    icon: "Home", // Default icon
    backgroundColor: "#F58840",
    name: "",
  });

  // Handle color change
  const handleSelectChange = (color: ColorResult) => {
    setBackgroundColor(color.hex);
    setFormData({ ...formData, backgroundColor: color.hex });
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  // Handle form field changes
  const handleChange =
    (field: string) =>
    (event: React.ChangeEvent<{ value: unknown }>) => {
      setFormData({ ...formData, [field]: event.target.value as string });
    };

  const IconComponent = (Icons as Record<string, React.ElementType>)[formData.icon] || null;

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4 pt-10">
          {/* Select Icon */}
          <div className="flex flex-col gap-4">
            <p className="text-[#3324C5B] text-[18px] font-normal">Icon</p>
            <FormControl fullWidth sx={{ marginBottom: 2 }} className="relative"  sx={{
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
            }}> 
              <Select
               className="!text-[#FFFFFF]"
                labelId="icon-label"
                value={formData.icon}
                onChange={handleChange("icon")}
                sx={{
                  "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "12px",
                  },
                }}
              >
                <MenuItem value="Home">Home</MenuItem>
                <MenuItem value="Person">Person</MenuItem>
                <MenuItem value="Settings">Settings</MenuItem>
                <MenuItem value="Favorite">Favorite</MenuItem>
              </Select>
              <div className="text-center absolute top-1 left-2">
                <StyledIcon >
                  {IconComponent ? <IconComponent fontSize="large" /> : null}
                </StyledIcon>
              </div>
            </FormControl>
          </div>

          <div className="flex flex-col">
            <p className="text-[#3324C5B] text-[18px] font-normal mb-4">
              Background Color
            </p>
            <FormControl fullWidth sx={{ marginBottom: 2 }} className="relative"  sx={{
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
            }}>
              <Select
                ref={selectRef as React.RefObject<any>}
                labelId="background-color-label"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              
                MenuProps={{
                  PaperProps: {
                    style: { borderRadius: "12px" },
                  },
                }}
              >
                <MenuItem>
                  <Box>
                    <SketchPicker
                      color={backgroundColor}
                      onChangeComplete={handleSelectChange}
                    />
                  </Box>
                </MenuItem>
              </Select>

              {/* Clickable Circle to Open Dropdown */}
              <div
                style={{ backgroundColor }}
                className="absolute top-3 left-4 text-white w-[30px] h-[30px] rounded-full cursor-pointer"
                onClick={() => {
                  if (selectRef.current) {
                    selectRef.current.click();
                  }
                }}
              ></div>
            </FormControl>
          </div>
          
        </div>
        <div className="flex flex-col">
           <p className="text-[#3324C5B] text-[18px] font-normal mb-4">Name</p>
           <TextField
            placeholder="New category name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
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
          </div>
           <div className="flex justify-start w-full pt-5">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className=" mt-[30px] md:mt-[10px] !text-[16px] md:!text-[18px] !font-medium !bg-[#6DB33F] w-full md:w-[40%] !normal-case !rounded-[5px] py-2 md:!py-2"
            >
             Add Category
            </Button>
          </div>
      </form>
 {/* Table */}
    <div className="w-full bg-[#FFFFFF] pt-6">
      <p className="text-[##324C5B] text-[22px] font-semibold my-[30px]">Manage Category</p>
     <TableContainer  sx={{ boxShadow: 'none' }} component={Paper} elevation={3}>
      <Table sx={{ border: 'none' }}>
        <TableHead  className="!bg-[#F5F5F5] border-b-[#F5F5F5] !border-[0px]">
          <TableRow className="!bg-[#F5F5F5] border-b-[#F5F5F5] !border-[0px]">
            <TableCell align="center" style={{ fontWeight: "bold" }}>Iconss</TableCell>
            <TableCell  align="center" style={{ fontWeight: "bold" }}>Name</TableCell>
             <TableCell  align="center" style={{ fontWeight: "bold" }}>Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
             key={index} sx={{ border: 'none' }}
            >
              <TableCell align="center">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {row.icon}
                </div>
              </TableCell>
              <TableCell align="center">
              <p className="text-[#47B5FF] text-[16px] font-medium">  {row.name} </p>
              </TableCell>

               <TableCell   align="center" style={{ color: "white", fontWeight: "bold" }}>
                <div className="flex justify-center gap-2">
                  <IconButton aria-label="delete">
                    <IconsDelete />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <IconEdit />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  );
};

export default CreateCategoryForm;
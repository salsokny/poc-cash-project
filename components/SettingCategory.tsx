
"use client";
import IconCategoryPrimary from "@/public/icons/categoryPrimary";
import IconDeleteAccount from "@/public/icons/deleteAccount";
import IconLogOut from "@/public/icons/logOut";
import { Button, Divider, Dialog } from "@mui/material";
import CreateCategoryForm from "@/components/createCategory"
import { useRouter } from 'next/navigation';
import AccountSettingPrimary from "./AccountSettingPrimay";
import { useState } from "react";
import IconQuestion from "@/public/icons/question";

const SettingCategory = () => {
  const [openDialog, setOpenDialog] = useState(false);
    const router = useRouter()
    const handlToAccountSetting = () => {
        router.push('/setting')
    }

    const handlToSettingCategory = () => {
        router.push('/setting/category')
    }

       // Open the modal
  const handleLogout = () => {
    setOpenDialog(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpenDialog(false);
  };
    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-4 mb-[50px]">
        <div className="col-span-1 space-y-3 flex flex-col">
          <p className="text-[#324C5B] text-[28px] md:text-[32px] font-semibold">
            Setting
          </p>
          <div className="bg-white h-[400px]  md:min-h-[670px] p-4 rounded-[10px] w-full relative">
            <div className="flex flex-col gap-4">
              <div
                onClick={handlToAccountSetting}
                className="flex cursor-pointer justify-start gap-2 py-4 px-3 hover:bg-[#f4f7fa]"
              >
                <AccountSettingPrimary />
                <p className="text-[#616872CC] text-[18px] md:text-[20px] font-medium">
                  Account Setting
                </p>
              </div>
              <div
                onClick={handlToSettingCategory}
                className="flex cursor-pointer justify-start gap-2 py-4 px-3 hover:bg-[#f4f7fa]"
              >
                <IconCategoryPrimary />
                <p className="text-[#6DB33F] text-[18px] md:text-[20px] font-semibold">
                  Category
                </p>
              </div>
              <Divider
                className="!my-[5px]"
                sx={{ backgroundColor: "#6D7D9310", height: "1px" }}
              />
              <div onClick={handleLogout}  className="flex cursor-pointer justify-start items-center gap-2 py-4 px-3 hover:bg-[#f4f7fa]">
                <IconLogOut />
                <p className="text-[#616872CC] text-[18px] md:text-[20px] font-medium">
                  Log Out
                </p>
              </div>

              <div className="absolute bottom-8 flex justify-start gap-2 ">
                <div className="flex cursor-pointer justify-start items-center gap-2 py-4 px-3 hover:bg-[#f4f7fa]">
                  <IconDeleteAccount />
                  <p className="!text-[#FF4949] !underline !text-[18px] md:!text-[20px] !font-medium !ml-2 !normal-case">
                    Delete account
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 space-y-3 flex flex-col pt-14 ml-0 md:ml-[80px]">
          <div className="w-full bg-white p-6 rounded-[10px]">
            <div className="w-full">
              {" "}
            <p className="text-[#324C5B] text-[24px] font-semibold">Create a new category </p>  
              <CreateCategoryForm />
            </div>
          </div>
        </div>

           {/* Dialog Component for Logout */}
            <Dialog open={openDialog} onClose={handleClose} sx={{
                "& .MuiDialog-paper": {
                borderRadius: "10px", // Apply border-radius to the paper element
                },
            }}>
            <div className="flex flex-col gap-4 !pt-3 md:!pt-6 !pb-6 md:!pb-8 px-8 md:!px-12">
                <div className="flex justify-center">
                <IconQuestion />
                </div>
                <p className="!text-[#000000] !text-center text-[18px] md:!text-[20px] !font-semibold !py-1">
                Are you sure you want to <br /> Logout?
                </p>

                <div className="flex justify-around gap-6 !w-full !pt-[10px]">
                <Button  size="small" variant="outlined" onClick={handleClose} className="!border-[#6DB33F] !w-[100%]">
                    <p className="!text-[#6DB33F] !text-[16px] md:!text-[18px] !font-medium"> Yes </p>
                </Button>
                <Button size="small" onClick={handleClose} className="!bg-[#FCE444] !border-[#FCE444] !w-[100%] !px-[20px]">
                    <p className="!text-[#000000] !text-[16px] md:!text-[18px] !font-medium"> No </p>
                </Button>
                </div>
            </div>
            </Dialog>
      </div>
    );
};

export default SettingCategory;

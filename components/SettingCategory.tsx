import IconCategory from "@/public/icons/category";
import IconCategoryPrimary from "@/public/icons/categoryPrimary";
import IconDeleteAccount from "@/public/icons/deleteAccount";
import IconEdit from "@/public/icons/edit";
import IconLogOut from "@/public/icons/logOut";
import IconSetting from "@/public/icons/setting";
import { Avatar, Button, Divider } from "@mui/material";
import CreateCategoryForm from "@/components/createCategory"
import { useRouter } from 'next/navigation';
import AccountSettingPrimary from "./AccountSettingPrimay";

const SettingCategory = () => {

    const router = useRouter()
    const handlToAccountSetting = () => {
        router.push('/setting')
    }

    const handlToSettingCategory = () => {
        router.push('/setting/category')
    }

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
                className="flex justify-start gap-2 py-4 px-3 hover:bg-[#f4f7fa]"
              >
                <AccountSettingPrimary />
                <p className="text-[#616872CC] text-[18px] md:text-[20px] font-medium">
                  Account Setting
                </p>
              </div>
              <div
                onClick={handlToSettingCategory}
                className="flex justify-start gap-2 py-4 px-3 hover:bg-[#f4f7fa]"
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
              <div className="flex justify-start items-center gap-2 py-4 px-3 hover:bg-[#f4f7fa]">
                <IconLogOut />
                <p className="text-[#616872CC] text-[18px] md:text-[20px] font-medium">
                  Log Out
                </p>
              </div>

              <div className="absolute bottom-8 flex justify-start gap-2 ">
                <div className="flex justify-start items-center gap-2 py-4 px-3 hover:bg-[#f4f7fa]">
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
      </div>
    );
};

export default SettingCategory;

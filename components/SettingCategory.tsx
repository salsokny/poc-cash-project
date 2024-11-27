import IconCategory from "@/public/icons/category";
import IconCategoryPrimary from "@/public/icons/categoryPrimary";
import IconDeleteAccount from "@/public/icons/deleteAccount";
import IconEdit from "@/public/icons/edit";
import IconLogOut from "@/public/icons/logOut";
import IconSetting from "@/public/icons/setting";
import { Avatar, Button, Divider } from "@mui/material";

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
                        <div onClick={handlToAccountSetting} className="flex justify-start gap-2 py-4 px-3 hover:bg-[#f4f7fa]">
                            <AccountSettingPrimary />
                            <p className="text-[#616872CC] text-[18px] md:text-[20px] font-medium">
                                Account Setting
                            </p>
                        </div>
                        <div onClick={handlToSettingCategory} className="flex justify-start gap-2 py-4 px-3 hover:bg-[#f4f7fa]">
                            <IconCategoryPrimary />
                            <p className="text-[#6DB33F] text-[18px] md:text-[20px] font-semibold">
                                Category
                            </p>
                        </div>
                        <Divider className="!my-[5px]" sx={{ backgroundColor: "#6D7D9310", height: "1px" }} />
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
                <p className="text-[#324C5B] text-[20px] md:text-[24px] font-bold">
                    Edit profile
                </p>
                {/* Profile */}
                <div className="bg-white rounded-[10px] w-full p-5">
                    <div className="flex justify-between items-start pl-0 md:pl-10">
                        <div className="flex justify-start items-center gap-4 md:gap-12">
                            <Avatar
                                alt="Phann Sothyro"
                                src="/images/profile.png"
                                className=" !w-[60px] md:!w-[80px] !h-[60px] md:!h-[80px] !border-2 !border-[#6DB33F80]"
                            />
                            <div className="flex flex-col gap-2">
                                <p className="text-[#324C5B] text-[16px] md:text-[24px] font-semibold ">
                                    Phann Sothyro
                                </p>
                                <p className="text-[#93A1AA] text-[16px] font-normal">
                                    Phnom Penh
                                </p>
                            </div>
                        </div>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: "#6D7D9326", // Custom border color with opacity
                                "&:hover": {
                                    borderColor: "#6D7D9326", // Keep the same border color on hover
                                },
                            }}
                        >
                            <div className="flex justify-center items-center gap-2">
                                <p className="!text-[#6D7D93] !text-[12px]  !font-normal">
                                    Edit
                                </p>
                                <IconEdit />
                            </div>
                        </Button>
                    </div>
                </div>
                {/* Information */}
                <div className="h-[18px] w-full"></div>
                <div className="bg-white rounded-[10px] w-full p-5 ">
                    <div className="w-full pl-0 md:pl-10 relative">
                        <p className="text-[#324C5B] text-[16px] md:text-[18px] font-semibold ">
                            Personal Information
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-[20px] md:pt-[40px]">
                            <div className="flex justify-start md:flex-col items-center md:items-start gap-3">
                                <p className="text-[#93A1AA] text-[16px] text-start  font-normal">
                                    Email :
                                </p>
                                <p className="text-[#93A1AA] text-[13px]  font-normal">
                                    name@gmail.com
                                </p>
                            </div>
                            <div className="flex justify-start md:flex-col items-center md:items-start gap-3">
                                <p className="text-[#93A1AA] text-[16px]  font-normal">
                                    Phone number :
                                </p>
                                <p className="text-[#93A1AA] text-[13px]  font-normal">
                                    +855 12 345 567
                                </p>
                            </div>
                        </div>
                        <div className="absolute  top-0 right-0">
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: "#6D7D9326", // Custom border color with opacity
                                    "&:hover": {
                                        borderColor: "#6D7D9326", // Keep the same border color on hover
                                    },
                                }}
                            >
                                <div className="flex justify-center items-center gap-2">
                                    <p className="!text-[#6D7D93] !text-[12px]  !font-normal">
                                        Edit
                                    </p>
                                    <IconEdit />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Privacy */}

                <div className="h-[18px] w-full"></div>
                <div className="bg-white rounded-[10px] w-full p-5 ">
                    <div className="w-full pl-0 md:pl-10 relative">
                        <p className="text-[#324C5B] text-[16px] md:text-[18px] font-semibold ">
                            Privacy
                        </p>

                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-[20px] md:pt-[40px]">
                            <div className="flex justify-start md:flex-col items-center md:items-start gap-3">
                                <p className="text-[#93A1AA] text-[16px]  font-normal">
                                    Gender :
                                </p>
                                <p className="text-[#93A1AA] text-[13px]  font-normal">
                                    Female
                                </p>
                            </div>
                            <div className="flex justify-start md:flex-col items-center md:items-start gap-3">
                                <p className="text-[#93A1AA] text-[16px]  font-normal">
                                    Date of birth :
                                </p>
                                <p className="text-[#93A1AA] text-[13px]  font-normal">
                                    00/00/0000
                                </p>
                            </div>

                            <div className="flex justify-start md:flex-col items-center md:items-start gap-3">
                                <p className="text-[#93A1AA] text-[16px]  font-normal">Sex :</p>
                                <p className="text-[#93A1AA] text-[13px]  font-normal">
                                    Female
                                </p>
                            </div>
                        </div>
                        {/* row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-[20px] md:pt-[40px]">
                            <div className="flex justify-start md:flex-col items-center md:items-start gap-3">
                                <p className="text-[#93A1AA] text-[16px]  font-normal">
                                    Gender :
                                </p>
                                <p className="text-[#93A1AA] text-[13px]  font-normal">
                                    Female
                                </p>
                            </div>
                            <div className="flex justify-start md:flex-col items-center md:items-start gap-3">
                                <p className="text-[#93A1AA] text-[16px]  font-normal">
                                    Date of birth :
                                </p>
                                <p className="text-[#93A1AA] text-[13px]  font-normal">
                                    00/00/0000
                                </p>
                            </div>

                            <div className="flex justify-start md:flex-col items-center md:items-start gap-3">
                                <p className="text-[#93A1AA] text-[16px]  font-normal">Sex :</p>
                                <p className="text-[#93A1AA] text-[13px]  font-normal">
                                    Female
                                </p>
                            </div>

                            {/* end                 */}
                        </div>
                        <div className="absolute  top-0 right-0">
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: "#6D7D9326", // Custom border color with opacity
                                    "&:hover": {
                                        borderColor: "#6D7D9326", // Keep the same border color on hover
                                    },
                                }}
                            >
                                <div className="flex justify-center items-center gap-2">
                                    <p className="!text-[#6D7D93] !text-[12px]  !font-normal">
                                        Edit
                                    </p>
                                    <IconEdit />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingCategory;
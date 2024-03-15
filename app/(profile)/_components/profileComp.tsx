"use client";

import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { User } from "firebase/auth";
import { Profile } from "@/lib/profileobj";

export const ProfileComp = ({ user, profile }: { user: User, profile: Profile | null }) => {
    const [loading, setLoading] = useState(false);

    if (loading) {
        return <div className="w-full flex justify-center"><CircularProgress size="25px" color="secondary" /></div>;
    }

    return (
        <div>
            <div className="border rounded-md p-7 flex flex-col gap-y-5">
            <div>
                    <p className="font-[600] text-[15px]">Your Name*</p>
                    <input
                        className="border rounded-lg px-4 max-w-[20rem] h-[40px] focus:outline-none"
                        placeholder="Your full name"
                        value={profile?.full_name || ""}
                        name="full_name"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <img className="rounded-[99rem] w-[60px] h-[60px] border" src={profile?.profile_photo !== "" && profile?.profile_photo !== null && profile?.profile_photo !== "NA"
                        ? profile?.profile_photo
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdpsO7bCr_BQtPvuwa58mo9hCZ5ebZqhVow&usqp=CAU"} alt=""
                    />
                    <div className="border rounded-lg px-4 py-[7px] hover:cursor-pointer hover:bg-slate-100"
                        role="button"
                        onClick={()=>{}}
                    >
                        Upload a new photo
                    </div>
                </div>
                <div>
                    <p className="font-[600] text-[15px]">Where are you based?*</p>
                    <input className="border rounded-lg px-4 w-full h-[40px] focus:outline-none "
                        placeholder="Place where you reside"
                        value={profile?.location}
                    />                 
                </div>
                <div>
                    <p className="font-[600] text-[15px]">Select Prefered Role</p>
                    <input className="border rounded-lg px-4 w-full h-[40px] focus:outline-none "
                        placeholder="Role you are looking for"
                        value={profile?.prefered_roles}
                    />
                </div>
                <div>
                    <p className="font-[600] text-[15px]">Bio</p>
                    <textarea 
                        className="border rounded-lg px-4 py-2 w-full resize-y h-[100px] focus:outline-none " 
                        placeholder="Tell more bout yourself"
                        value={profile?.bio}
                    />
                </div>
                <div>
                    <p className="font-[600] text-[15px]">Skills</p>
                    <input className="border rounded-lg px-4 w-full h-[40px] focus:outline-none "
                        placeholder="Role you are looking for"
                        value={profile?.skills}
                    />                 
                </div>
                <div>
                    <p className="font-[600] text-[15px]">Experience</p>
                    <div className="flex gap-3 justify-center items-center">
                        <p className="w-[7rem]">Title</p>
                        <input className="border rounded-lg px-4 w-full h-[40px] focus:outline-none "
                            placeholder="Title of the position"
                            value={profile?.exp_title}
                        /> 
                    </div>
                    <div className="flex gap-3 justify-center items-center mt-2">
                        <p className="w-[7rem]" >Company</p>
                        <input className="border rounded-lg px-4 w-full h-[40px] focus:outline-none "
                            placeholder="Company name"
                            value={profile?.exp_company}
                        /> 
                    </div>
                    <div className="flex gap-3 items-start mt-2">
                        <p className="w-[7rem]">Description</p>
                        <textarea className="border rounded-lg px-4 py-2 w-full resize-y h-[100px] focus:outline-none " 
                            placeholder="Details"
                            value={profile?.exp_description}
                        /> 
                    </div>
                </div>
                <div>
                    <p className="font-[600] text-[15px]">Project</p>
                    <div className="flex gap-3 justify-center items-center">
                        <p className="w-[7rem]">Title</p>
                        <input className="border rounded-lg px-4 w-full h-[40px] focus:outline-none "
                            placeholder="Title of the project"
                            value={profile?.project_title}
                        /> 
                    </div>
                    <div className="flex gap-3 justify-center items-center mt-2">
                        <p className="w-[7rem]" >Link</p>
                        <input className="border rounded-lg px-4 w-full h-[40px] focus:outline-none "
                            placeholder="Link for the project"
                            value={profile?.project_link}
                        /> 
                    </div>
                    <div className="flex gap-3 items-start mt-2">
                        <p className="w-[7rem]">Description</p>
                        <textarea className="border rounded-lg px-4 py-2 w-full resize-y h-[100px] focus:outline-none " 
                            placeholder="Details"
                            value={profile?.project_description}
                        /> 
                    </div>
                </div>
                <div className="border rounded-lg w-[7rem] text-[white] flex justify-center px-4 py-[7px] hover:cursor-pointer bg-blue-400 hover:bg-blue-500 mt-2"
                    role="button"
                    onClick={()=>{}}
                >Save</div>
            </div>
        </div>
    )
}
"use client";

import { Overview } from "@/app/(profile)/_components/Overview";
import { ProfileComp } from "@/app/(profile)/_components/profileComp";
import { Resume } from "@/app/(profile)/_components/Resume";
import { useState } from "react";

const ProfileIdpage = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const onSwitch = (tabName:string) => {
        setActiveTab(tabName);
    }
   
    return (
        <div className="">
            <h1 className="text-[27px] font-[600] pb-5">Edit your Recruto profile</h1>
            <div className="flex text-[17px] gap-10 mb-[20px]">
                <div
                    role="button"
                    onClick={() => onSwitch('Overview')}
                    className={`cursor-pointer ${activeTab === 'Overview' ? 'font-[500] text-[black] border-b-2 border-black  py-1' : ' py-1'}`}
                >
                    Overview
                </div>
                <div
                    role="button"
                    onClick={() => onSwitch('Edit')}
                    className={`cursor-pointer ${activeTab === 'Profile' ? 'font-[500] text-[black] border-b-2 border-black  py-1' : ' py-1'}`}
                >
                    Edit
                </div>
                <div
                    role="button"
                    onClick={() => onSwitch('Resume/CV')}
                    className={`cursor-pointer ${activeTab === 'Resume/CV' ? 'font-[500] text-[black] border-b-2 border-black  py-1' : 'py-1'}`}
                >
                    Resume/CV
                </div>
            </div>
            {activeTab == "Overview" && (
                <Overview/>
            )} 
            {activeTab == "Edit" && (
                <ProfileComp/>
            )} 
            {activeTab == "Resume/CV" && (
                <Resume/>
            )} 
            <div className="h-[5rem]"></div>
        </div>
    );
}
 
export default ProfileIdpage;
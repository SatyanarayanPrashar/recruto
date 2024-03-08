"use client";

import { JobTile } from "@/components/JobTile";

export const JobSection = () => {

    return (
        <div className="lg:flex sm:block items-start justify-start max-w-[75rem] mt-[-50px] mb-[8rem] gap-10 text-start">
            <div>
                <div className="text-start">
                    <h1 className="text-[1.3rem] font-[600]">   
                        Trending Jobs<span className="text-[#E9357B]">:</span>
                    </h1>
                    <JobTile/>
                    <JobTile/>
                    <JobTile/>
                </div>
                <div className="text-start">
                    <h1 className="text-[1.3rem] font-[600]">   
                        New Jobs<span className="text-[#E9357B]">:</span>
                    </h1>
                    <JobTile/>
                    <JobTile/>
                    <JobTile/>
                </div>
            </div>

            <div className="lg:sticky sm:absolute top-[2rem]">
                <div className="border rounded-[11px] h-[20rem] px-4 py-4 mt-[3.3rem] shadow-[0px_0px_11.2px_1px_#DDDDDD]">
                    <h1 className="text-[1.3rem] font-[500]">   
                        Level up your job search<span className="text-[#E9357B]">:</span>
                    </h1>
                    <p className="text-[black] opacity-70 mt-5 ">
                        Check your Compatibility with the job with RecrutoAI, and get personalized feedback
                    </p>
                    <p className="text-[black] opacity-70 mt-5 mb-5">
                        Let founders and recruiters reach out to you
                    </p>
                    <div className="">
                        <input type="text" className="border rounded-[7px] w-full h-[35px] pl-[20px] pr-[50px] mb-3" placeholder="Your Email"/>
                        <button className="bg-[#0085FF] w-full rounded-[7px] h-[35px] text-white text-[15px]"> Sign up </button>
                    </div>
                </div>
                <div className="border rounded-[11px] px-4 py-4 mt-4 shadow-[0px_0px_11.2px_1px_#DDDDDD]">
                    <h1 className="text-[1.3rem] font-[500]">   
                        Hire Talent on Auto-Pilot<span className="text-[#E9357B]">:</span>
                    </h1>
                    <div className="">
                        <button className="bg-[#0085FF] w-full rounded-[7px] h-[35px] text-white text-[15px]"> Sign up </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
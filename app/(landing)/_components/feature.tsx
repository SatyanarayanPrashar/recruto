"use client";

import { ArrowRight } from "lucide-react";

export const Feature = () => {

    return (
        <div className="lg:flex  max-w-7xl bg-[#51619A] rounded-[31px] mb-[8rem] gap-[7rem] pl-[7rem] pr-[7rem] pt-[4rem] pb-[4rem]">
            <div className="text-start font-sans text-white">
                <h1 className="text-5xl">
                    Meet <span className="font-bold"> Recruto<span className="text-[#E9357B]">AI</span> </span>
                </h1>
                <h1 className="text-5xl">
                    Hiring on Auto-Pilot.
                </h1>
                <p className="w-[28rem] text-[24px] mt-[40px] mb-[40px]">
                    Recruto does all - Generate JD, Set custom screening, Shortlist Candidates,
                    Setup interviews — all in a matter of days.
                    It's that easy.
                </p>
                <button className="flex items-center justify-center gap-2 bg-[#0085FF] rounded-[7px] h-[40px] text-white pr-[20px] pl-[20px] text-[15px]"> Hire Talent <ArrowRight size={"15px"} /> </button>
            </div>
            <img className="lg:w-[30rem] sm:w-[2rem]" src="total.png" alt="" />
        </div>
    )
}
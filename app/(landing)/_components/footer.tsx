"use client";

export const Footer = () => {

    return (
        <div className="lg:flex border items-center justify-center max-w-7xl mb-[3rem]">
            <img src="join.png" alt="" />
            <div className="text-start font-sans ml-[4rem]">
                <h1 className="text-5xl">
                    Get Started Today
                </h1>
                <p className="text-[27px] mt-[40px] mb-[40px]">
                    To apply to jobs with one-click and connect with founders and recruiters searching for your skills.
                </p>
                <div className="flex">
                    <button className="bg-[#0085FF] rounded-[7px] h-[40px] text-white pr-[20px] pl-[20px] text-[15px]"> Explore Jobs </button>
                    <button className="bg-[#0085FF] rounded-[7px] h-[40px] text-white pr-[20px] pl-[20px] text-[15px]"> Create your profile </button>
                </div>
            </div>
        </div>
    )
}
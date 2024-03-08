"use client";

export const JobTile = () => {
    return (
        <div className=" lg:w-[50rem] sm:w-[4rem] border rounded-[11px] p-5 my-5 shadow-[0px_0px_11.2px_1px_#DDDDDD]">
            <div className="flex gap-5">
                <div className="h-[3rem] w-[3rem] bg-red-600 rounded-lg"></div>
                <div className="">
                    <p className="text-[20px]">Machine Learning Enginerring Manager - II</p>
                    <div className="flex gap-4 text-[14px] wrap">
                        <p>Pintrest</p>
                        <p>On-Site</p>
                        <p>Social Media</p>
                        <p>Internet</p>
                        <p>E-commerce</p>
                    </div>
                </div>
            </div>
            <div className="lg:flex sm:block mt-[20px] justify-between items-end">
                <div className="flex  gap-10 ">
                    <div>
                        <p className="text-[14px] font-[600] text-[#4D4D4D]">Location</p>
                        <p className="text-[17px] text-[#4D4D4D]">San-Fransico</p>
                    </div>
                    <div>
                        <p className="text-[14px] font-[600] text-[#4D4D4D]">Job Type</p>
                        <p className="text-[17px] text-[#4D4D4D]">Full Time</p>
                    </div>
                </div>
                <div className="flex gap-5 lg:mt-0 sm:mt-5">
                    <button className="flex-2 px-5 py-1 rounded-[7px] border h-[35px] text-[14px] text-[#4D4D4D] font-[500]"> Check your Compatibility </button>
                    <button className="flex-1 px-5 py-1 bg-[#928CD2] rounded-[7px] h-[35px] text-white text-[14px] font-[500]"> Apply </button>
                </div>
            </div>
        </div>
    )
}
"use client";

export const Feature = () => {

    return (
        <div className="lg:flex items-center justify-center max-w-7xl bg-[#51619A] rounded-[31px] p-10 mb-[1.5rem]">
            <div className="text-start font-sans text-white">
                <h1 className="text-5xl">
                    Meet <span className="font-bold"> Recruto <span className="text-[#E9357B]">AI</span> </span>
                </h1>
                <h1 className="text-5xl">
                    Hiring on Auto-Pilot.
                </h1>
                <p className="text-[27px] mt-[40px] mb-[40px]">
                    Recruto does all - Generate JD, Set custom screening, Shortlist Candidates,
                    Setup interviews — all in a matter of days.
                    It's that easy.
                </p>
                <button className="bg-[#0085FF] rounded-[7px] h-[40px] text-white pr-[20px] pl-[20px] text-[15px]"> Hire Talent -> </button>
            </div>
            <img className="lg:w-[30rem] sm:w-[2rem]" src="first-scroll.png" alt="" />
            {/* <img className="lg:w-[30rem] sm:w-[2rem]" src="second-scroll.png" alt="" />
            <img className="lg:w-[30rem] sm:w-[2rem]" src="third-scroll.png" alt="" /> */}

        </div>
    )
}
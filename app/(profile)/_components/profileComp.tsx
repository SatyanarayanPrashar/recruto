"use client";

export const ProfileComp = () => {

    return (
        <div>
            <div className="border rounded-lg p-7 flex flex-col gap-y-5">
                <div>
                    <p className="font-[600] text-[15px]">Your Name*</p>
                    <input className="border rounded-lg px-4 max-w-[20rem] h-[40px] focus:outline-none "
                        placeholder="Your full name"
                        value="Satyanarayan Prashar"
                    />                 
                </div>
                <div className="flex gap-3 items-center">
                    <img className="rounded-[99rem] w-[70px] h-[70px] border" src="me.jpeg" alt="" />
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
                        value="banglore"
                    />                 
                </div>
                <div>
                    <p className="font-[600] text-[15px]">Select Prefered Role</p>
                    <input className="border rounded-lg px-4 w-full h-[40px] focus:outline-none "
                        placeholder="Role you are looking for"
                        value="Frontend Developer"
                    />                 
                </div>
                <div>
                    <p className="font-[600] text-[15px]">Bio</p>
                    <textarea 
                        className="border rounded-lg px-4 py-2 w-full resize-y h-[100px] focus:outline-none " 
                        placeholder="Tell more bout yourself"
                        value="I enjoy creating things that live on the internet. My goal is to always build products that provide pixel-perfect, performant experiences."
                    />
                </div>
                <div>
                    <p className="font-[600] text-[15px]">Skills</p>
                    <input className="border rounded-lg px-4 w-full h-[40px] focus:outline-none "
                        placeholder="Role you are looking for"
                        value="Frontend Developer"
                    />                 
                </div>
                <div>
                    <p className="font-[600] text-[15px]">Experience</p>
                    <div className="flex gap-3 justify-center items-center">
                        <p className="w-[7rem]">Title</p>
                        <input className="border rounded-lg px-4 w-full h-[40px] focus:outline-none "
                            placeholder="Title of the position"
                            value="Product Manager"
                        /> 
                    </div>
                    <div className="flex gap-3 justify-center items-center mt-2">
                        <p className="w-[7rem]" >Company</p>
                        <input className="border rounded-lg px-4 w-full h-[40px] focus:outline-none "
                            placeholder="Company name"
                            value="Treeved"
                        /> 
                    </div>
                    <div className="flex gap-3 items-start mt-2">
                        <p className="w-[7rem]">Description</p>
                        <textarea className="border rounded-lg px-4 py-2 w-full resize-y h-[100px] focus:outline-none " 
                            placeholder="Details"
                            value="Created strategy, and roadmap for the product based on Market Research and resources available • Leaded the development team working with NextJS, Django Rest FrameWork, AWS and Azure • Created required wire frames for designs and documents using tools Figma, Slack • Executed Market Research and User Feedback in various online communities"
                        /> 
                    </div>
                </div>
                <div>
                    <p className="font-[600] text-[15px]">Project</p>
                    <div className="flex gap-3 justify-center items-center">
                        <p className="w-[7rem]">Title</p>
                        <input className="border rounded-lg px-4 w-full h-[40px] focus:outline-none "
                            placeholder="Title of the project"
                            value="WeJournal"
                        /> 
                    </div>
                    <div className="flex gap-3 justify-center items-center mt-2">
                        <p className="w-[7rem]" >Link</p>
                        <input className="border rounded-lg px-4 w-full h-[40px] focus:outline-none "
                            placeholder="Link for the project"
                            value="https://wejournal.com"
                        /> 
                    </div>
                    <div className="flex gap-3 items-start mt-2">
                        <p className="w-[7rem]">Description</p>
                        <textarea className="border rounded-lg px-4 py-2 w-full resize-y h-[100px] focus:outline-none " 
                            placeholder="Details"
                            value="• Developed a collaborative journaling platform enabling solo and paired journaling experiences • Employed Next.js for frontend development, leveraging its SSR capabilities for optimized performance • Implemented a responsive and intuitive user interface for seamless navigation and interaction"
                        /> 
                    </div>
                </div>
            </div>
        </div>
    )
}
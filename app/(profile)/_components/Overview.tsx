"use client";

import { ExternalLink, Github, Linkedin } from "lucide-react";

export const Overview = () => {

    return (
        <div>
            <p>What recruiters will see</p>
            <div className="border rounded-lg p-7 flex flex-col gap-y-5">
                <div className="flex gap-3">
                    <img className="rounded-[99rem] w-[60px] h-[60px] border" src="me.jpeg" alt="" />
                    <div>
                        <h1 className="font-[600] text-[20px]">Satyanarayan Prashar</h1>
                        <div className="flex items-center">
                            <p>Bengaluru, India</p>
                            <div className="flex gap-5 hover:cursor-pointer ml-10">
                                <ExternalLink size="18px" color="grey"/>
                                <Linkedin size="18px" color="grey"/>
                                <Github size="18px" color="grey"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-[14px] text-[#9A9A9A] mb-[10px]">Bio</p>
                    <p className="ml-[15px]">To work with the bests, and learn from them while leveraging my programming and organisational skills to contribute to the prosperity of the organization.</p>
                </div>
                <div>
                    <p className="text-[14px] text-[#9A9A9A] mb-[10px]">Skills</p>
                    <p className="ml-[15px] flex gap-3">
                        <div className="rounded-lg bg-slate-200 py-[4px] px-[15px]">NextJs</div>
                        <div className="rounded-lg bg-slate-200 py-[4px] px-[15px]">ReactJs</div>
                        <div className="rounded-lg bg-slate-200 py-[4px] px-[15px]">Flutter</div>
                        <div className="rounded-lg bg-slate-200 py-[4px] px-[15px]">Django</div>
                        <div className="rounded-lg bg-slate-200 py-[4px] px-[15px]">AWS</div>
                    </p>
                </div>
                <div>
                    <p className="text-[14px] text-[#9A9A9A] mb-[10px]">Experience</p>
                    <div className="flex ml-[15px]">
                        <img className="rounded-lg w-[50px] h-[50px] border" src="join.png" alt="" />
                        <div className="ml-[15px]">
                            <p className="font-[500]">Product Manager Intern</p>
                            <p className="text-[14px]">TreeVed</p>
                            <p className="text-[14px]">Jan 2023 to Nov 2023 </p>
                        </div>
                    </div>
                    <p className="ml-[15px] mt-[15px]">Created strategy, and roadmap for the product based on Market Research and resources available
                        • Leaded the development team working with NextJS, Django Rest FrameWork, AWS and Azure
                        • Created required wire frames for designs and documents using tools Figma, Slack
                        • Executed Market Research and User Feedback in various online communities
                    </p>
                </div>
                <div>
                    <p className="text-[14px] text-[#9A9A9A] mb-[10px]">Project</p>
                    <div className="flex ml-[15px]">
                        <img className="rounded-lg w-[50px] h-[50px] border" src="join.png" alt="" />
                        <div className="ml-[15px]">
                            <p className="font-[500]">WeJournal</p>
                            <p className="text-[14px] hover:cursor-pointer hover:text-[blue]">Visit</p>
                        </div>
                    </div>
                    <p className="ml-[15px] mt-[15px]">• Developed a collaborative journaling platform enabling solo and paired journaling experiences
                        • Employed Next.js for frontend development, leveraging its SSR capabilities for optimized performance
                        • Implemented a responsive and intuitive user interface for seamless navigation and interaction
                    </p>
                </div>
            </div>
        </div>
    )
}
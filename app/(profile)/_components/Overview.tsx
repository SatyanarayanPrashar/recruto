"use client";
import axios from "axios";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/providers/auth-provider";
import { CircularProgress } from "@mui/material";

interface Profile {
    g_token: { id: string; name: string };
    full_name: string | null;
    profile_photo: string;
    bio: string;
    location: string;
    prefered_roles: string;
    portfolio_link: string;
    linkedin_link: string;
    github_link: string;
    anyother_link: string;
    exp_title: string;
    exp_company: string;
    exp_description: string;
    project_title: string;
    project_link: string;
    project_description: string;
    skills: string;
}

export const Overview = () => {
    const [profileContent, setProfileContent] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [ user ] = useAuthState(auth);
    const [fullName, setFullName] = useState("");

    useEffect(() => {
        if (user?.uid) {
            axios.get(`http://127.0.0.1:8000/api/user/${user?.uid}/`)
                .then((response) => {
                    console.log("User data:", response.data);
                    setProfileContent(response.data as Profile);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                });
        }
    }, [user?.uid]);

    if (loading) {
        return <div className="w-full flex justify-center"><CircularProgress size="25px" color="secondary" /></div>;
    }

    const handleCreateProfile = async () => {
        try {
            setLoading(true);
            const response = await axios.post("http://127.0.0.1:8000/api/user/", {
                g_token: user?.uid,
                full_name: fullName,
                // "profile_photo": "NA",
                // "location": "",
                // "preferred_roles": "",
                // "bio": "",
                // "portfolio_link": "",
                // "linkedin_link": "",
                // "github_link": "",
                // "anyother_link": "",
                // "exp_title": "",
                // "exp_company": "",
                // "exp_description": "",
                // "project_title": "",
                // "project_link": "",
                // "project_description": "",
                // "skills": ""
            });
            console.log("Profile created:", response.data);
            setProfileContent(response.data);
        } catch (error) {
            console.error("Error creating profile:", error);
        } finally {
            setLoading(false);
        }
    };

    if (!profileContent) {
        return (
            <div className="border rounded-lg p-7 flex flex-col gap-y-5">
                <p>By Creating your profile on Recruto you agree with our <span><a className="text-[blue] hover:underline" href="http://example.com" target="_blank" rel="noopener noreferrer">terms and conditions</a></span></p>
                <div className="flex gap-5 items-center">
                    <input className="border rounded-lg px-4 w-full py-1 focus:outline-none "
                        placeholder="Enter your Full name"
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <div role="button"  onClick={handleCreateProfile} className="border rounded-md py-1 px-10 bg-blue-100 hover:bg-blue-300"> Create </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <p>What recruiters will see</p>
            <div className="border rounded-lg p-7 flex flex-col gap-y-5">
                <div className="flex gap-3">
                    <img className="rounded-[99rem] w-[60px] h-[60px] border" src={profileContent.profile_photo !== "" && profileContent.profile_photo !== null && profileContent.profile_photo !== "NA"
                        ? profileContent.profile_photo
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdpsO7bCr_BQtPvuwa58mo9hCZ5ebZqhVow&usqp=CAU"} alt=""
                    />
                    <div>
                        <h1 className="font-[600] text-[20px]">{profileContent.full_name}</h1>
                        <div className="flex items-center">
                            <p>{profileContent.location}</p>
                            <div className="flex gap-5 hover:cursor-pointer ml-10">
                                <a href={profileContent.linkedin_link} target="_blank" rel="noopener noreferrer"><Linkedin size="18px" color="grey"/></a>
                                <a href={profileContent.github_link} target="_blank" rel="noopener noreferrer"><Github size="18px" color="grey"/></a>
                                <a href={profileContent.portfolio_link} target="_blank" rel="noopener noreferrer"><ExternalLink size="18px" color="grey"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-[14px] text-[#9A9A9A] mb-[10px]">Bio</p>
                    <p className="ml-[15px]">{profileContent.bio}</p>
                </div>
                <div>
                    <p className="text-[14px] text-[#9A9A9A] mb-[10px]">Skills</p>
                    <p className="ml-[15px] flex gap-3 flex-wrap">
                        {profileContent.skills?.split(', ').map((skill, index) => (
                            <div key={index} className="rounded-lg bg-slate-200 py-[4px] px-[15px]">{skill}</div>
                        ))}
                    </p>
                </div>
                <div>
                    <p className="text-[14px] text-[#9A9A9A] mb-[10px]">Experience</p>
                    <div className="flex ml-[15px]">
                        <img className="rounded-lg w-[50px] h-[50px] border" src="https://cdn.vectorstock.com/i/1000x1000/31/74/company-icon-simple-element-vector-27083174.webp" alt="" />
                        <div className="ml-[15px]">
                            <p className="font-[500]">{profileContent.exp_title}</p>
                            <p className="text-[14px]">{profileContent.exp_company}</p>
                            <p className="text-[14px]">{profileContent.exp_description}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-[14px] text-[#9A9A9A] mb-[10px]">Project</p>
                    <div className="flex ml-[15px]">
                        <img className="rounded-lg w-[50px] h-[50px] border" src="https://www4.instagantt.com/assets/63c5e29f1b5bc83fe0af2489/6424d753f8eb7a9e69c372fc_Gantt%20Chart%20Online%20Software%20Instagantt%20Ideation%202.webp" alt="" />
                        <div className="ml-[15px]">
                            <p className="font-[500]">{profileContent.project_title}</p>
                            <p className="text-[14px] hover:cursor-pointer hover:text-[blue]"><a href={profileContent.project_link} target="_blank" rel="noopener noreferrer">Visit</a></p>
                            <p className="ml-[15px] mt-[15px]">{profileContent.project_description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";


export const Navbar = () => {
    const scrolled = useScrollTop();

    return (
        <div className={cn(
            "z-50 bg-white fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>
            <div>Recruto</div>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-[10vh]">        
                <div>For Company</div>
                <div>For Talent</div>
                <div>Login</div>
            </div>
        </div>
    )
}
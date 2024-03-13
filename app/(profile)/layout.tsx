"use client";

import { Navbar } from "@/components/navbar";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {

    return (
        <div className="">
            <Navbar />
            <main className="h-full pt-[5rem] mx-[20rem]">
                {children}
            </main>
        </div>
    );
}
 
export default MainLayout; 
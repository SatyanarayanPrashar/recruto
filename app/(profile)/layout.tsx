"use client";

import { Navbar } from "@/components/navbar";
import { auth } from "@/providers/auth-provider";
import { useAuthState } from "react-firebase-hooks/auth";
import { redirect } from "next/dist/client/components/navigation";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [user] = useAuthState(auth);

    if (!user) {
        return redirect("/");
    }
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
"use client"

import { Profile } from "@/lib/profileobj";
import axios from "axios";
import { useState, useEffect } from "react";
import { HeroSection } from "../../_components/hero";
import { JobSection } from "../../_components/jobs";
import { CircularProgress } from "@mui/material";
import { auth } from "@/providers/auth-provider";
import { useAuthState } from "react-firebase-hooks/auth";
import { Jobs } from "@/lib/jobsobj";

const JobPage = () => {

  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <HeroSection />
        
          <JobSection/>
      
        <p>Designed and Built by Satya</p>
      </div>
    </div>
  );
}

export default JobPage;
"use client"

import axios from "axios";
import { useState, useEffect } from "react";
import { HeroSection } from "../../_components/hero";
import { JobSection } from "../../_components/jobs";
import { CircularProgress } from "@mui/material";
import { Jobs } from "@/lib/jobsobj";

const JobPage = () => {
  // const [loading, setLoading] = useState(true);
  const [jobContent, setJobContent] = useState<Jobs[]>([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
      const handleScroll = () => {
        // console.log("Scroll position:", document.documentElement.scrollTop);
          if (
              window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight / 1.2 
              // !loading
          ) {
              setPage(prevPage => prevPage + 1);
          }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [ page]);

  useEffect(() => {
    fetchInitialContent(page);
  }, [page]);

  const fetchInitialContent = async (page: number) => {
      // setLoading(true);
      let url = `http://127.0.0.1:8000/api/jobs/?page=${page}`;
      try {
          const response = await axios.get(url);
          setJobContent(prevContent => [...prevContent, ...response.data.results]);
          // setLoading(false);
      } catch (error) {
          console.error('Error fetching initial data:', error);
          // setLoading(false);
      }
  };
  
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <HeroSection />
        <JobSection jobContent={jobContent}/>   
        <p>Designed and Built by Satya</p>
      </div>
    </div>
  );
}

export default JobPage;
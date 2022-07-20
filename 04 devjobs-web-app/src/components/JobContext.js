import React, { createContext, useState } from "react";
import { data } from "../data";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(data);
  const value = { jobs, setJobs };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

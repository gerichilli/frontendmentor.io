import React, { useContext } from "react";
import { JobContext } from "./JobContext";
import Job from "./Job";

const JobDetails = () => {
  const { jobs } = useContext(JobContext);
  return (
    <ul className="grid grid-cols-3 gap-x-7-5 gap-y-16">
      {jobs.map((job) => (
        <Job
          key={job.id} //
          id={job.id}
          company={job.company}
          logo={job.logo}
          logoBackground={job.logoBackground}
          position={job.position}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
        ></Job>
      ))}
    </ul>
  );
};

export default JobDetails;

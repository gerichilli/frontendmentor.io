import React, { useContext } from "react";
import { JobContext } from "./JobContext";
import JobSearch from "./JobSearch";
import Job from "./Job";

const JobDetails = () => {
  const { jobs } = useContext(JobContext);

  return (
    <div className="container px-5 lg:px-10 max-w-6xl">
      <JobSearch />
      <div className="py-20 md:py-24">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-3 xl:gap-x-7-5 gap-y-13 sm:gap-y-16 pb-14">
          {jobs.map((job) => (
            <Job
              key={job.id.toString()} //
              id={job.id}
              company={job.company}
              logo={job.logo}
              logoBackground={job.logoBackground}
              position={job.position}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
            />
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <button className="bg-primary hover:bg-primary-100 text-white font-bold py-3 px-8 rounded-md">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

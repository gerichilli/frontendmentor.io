import { useContext, useState } from "react";
import { JobsContext } from "./JobsContext";
import Job from "./Job";

function JobsList() {
  const { jobs, maxJobs, setMaxJobs } = useContext(JobsContext);

  function handleLoadMoreJob() {
    setMaxJobs(maxJobs + 12);
  }

  return (
    <div className="py-20 md:py-24">
      {jobs.length > 0 ? (
        <>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-3 xl:gap-x-7-5 gap-y-13 sm:gap-y-16">
            {jobs.slice(0, maxJobs).map((job) => (
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
          {maxJobs < jobs.length && (
            <div className="flex items-center justify-center mt-14">
              <button
                className="bg-primary hover:bg-primary-100 text-white font-bold py-3 px-8 rounded-md"
                onClick={handleLoadMoreJob}
              >
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-xl font-bold">
          No jobs match your search
        </p>
      )}
    </div>
  );
}

export default JobsList;

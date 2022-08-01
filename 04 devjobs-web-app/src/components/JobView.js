import React, { useContext } from "react";
import { JobContext } from "./JobContext";
import { useParams } from "react-router-dom";

const JobView = () => {
  const { jobs } = useContext(JobContext);
  const { id } = useParams();
  const job = jobs.filter((j) => j.id == id)[0];
  const {
    company,
    logo,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
    website,
    apply,
    description,
    requirements,
    role,
  } = job;
  return (
    <>
      <div className="container max-w-3xl px-5 lg:px-10 mb-20">
        <div className="relative bg-contrast-50 rounded-md sm:overflow-hidden flex flex-col sm:flex-row mb-8 ">
          <div
            className="absolute top-0 left-1/2 sm:top-0 sm:left-0 translate-x-[-50%] sm:translate-x-0 translate-y-[-50%] sm:translate-y-0 w-13 sm:w-35 h-13 sm:h-35 rounded-2xl sm:rounded-none flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${logoBackground}` }}
          >
            <img src={`/${logo}`} alt="" className="block w-10 sm:w-20" />
          </div>
          <div className="p-8 pt-13 sm:py-8 lg:px-10 lg:py-10-5 grow flex flex-col sm:flex-row items-center sm:ml-35">
            <div className="sm:mr-4 text-center sm:text-left">
              <h1 className="text-contrast-800 text-xl sm:text-2xl font-bold">
                {company}
              </h1>
              <p className="text-contrast-100">{website}</p>
            </div>
            <a
              href={website}
              className="btn-secondary sm:ml-auto mt-6 sm:mt-0 hover:bg-opacity-30 "
            >
              Company Site
            </a>
          </div>
        </div>
        <div className="bg-contrast-50 rounded-md px-6 py-10 sm:p-10 lg:p-12 sm:pr-8 lg:pr-10-5 ">
          <div className="mb-10 flex flex-col sm:flex-row items-center">
            <div className="sm:mr-4 self-start">
              <div className="text-contrast-100 flex items-center">
                <span>{postedAt}</span>
                <span className="inline-block w-1 h-1 rounded-sm mx-3 bg-contrast"></span>
                <span>{contract}</span>
              </div>
              <h2 className="text-contrast-800 font-bold text-xl sm:text-2-5xl py-2 leading-7">
                {position}
              </h2>
              <p className="text-primary font-bold text-sm">{location}</p>
            </div>
            <a
              href={apply}
              className="btn-primary max-w-sm w-full sm:w-fit sm:ml-auto mt-13 sm:mt-0 xl:px-7 px-4"
            >
              Apply Now
            </a>
          </div>
          <p className="leading-relaxed text-contrast-100">{description}</p>
          <section className="my-10">
            <h3 className="text-xl font-bold text-contrast-800 mb-5">
              Requirements
            </h3>
            <p className="leading-relaxed text-contrast-100">
              {requirements.content}
            </p>
            <ul role="list" className="mt-5 marker:text-primary list-disc">
              {requirements.items.map((item, index) => (
                <li
                  key={index}
                  className="my-2 flex text-contrast-100 before:block before:shrink-0 before:w-1 before:h-1 before:rounded-sm before:bg-primary before:mr-8 before:mt-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-bold text-contrast-800 mb-5">
              What You Will Do
            </h3>
            <p className="leading-relaxed text-contrast-100">{role.content}</p>
            <ol role="list" className="mt-5 list-inside">
              {role.items.map((item, index) => (
                <li key={index} className={`my-2 flex text-contrast-100`}>
                  {item}
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
      <div className="bg-contrast-50 py-6 sm:py-4">
        <div className="container px-6 lg:px-10 max-w-3xl flex justify-center sm:justify-between items-center">
          <div className="mr-4 hidden sm:block">
            <h2 className="text-contrast-800 font-bold text-xl py-2 leading-7">
              {position}
            </h2>
            <p>{company}</p>
          </div>
          <a
            href={apply}
            className="btn-primary max-w-sm w-full sm:w-fit xl:px-7 px-4"
          >
            Apply Now
          </a>
        </div>
      </div>
    </>
  );
};

export default JobView;

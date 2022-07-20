import React from "react";

const Job = ({
  id,
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}) => {
  return (
    <li>
      <a href={`details/${id}`} className="job-card hover:shadow-lg">
        <div
          className="job-logo"
          style={{ backgroundColor: `${logoBackground}` }}
        >
          <img src={`/${logo}`} alt="" />
        </div>
        <div className="text-contrast-100">
          <span>{postedAt}</span>
          <span></span>
          <span>{contract}</span>
        </div>
        <h3 className="text-contrast-800 font-bold text-xl pt-2 pb-3">
          {position}
        </h3>
        <p className="text-contrast-100">{company}</p>
        <p className="text-primary font-bold text-sm pt-16 mt-auto">
          {location}
        </p>
      </a>
    </li>
  );
};

export default Job;

import React from "react";
import { Link } from "react-router-dom";

const Job = React.memo(
  ({
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
        <Link to={`/view/${id}`} className="job-card">
          <div
            className="job-logo"
            style={{ backgroundColor: `${logoBackground}` }}
          >
            <img src={`/${logo}`} alt="" />
          </div>
          <div className="text-contrast-100 flex items-center">
            <span>{postedAt}</span>
            <span className="inline-block w-1 h-1 rounded-sm mx-3 bg-contrast"></span>
            <span>{contract}</span>
          </div>
          <h3 className="text-contrast-800 font-bold text-xl pt-2 pb-3">
            {position}
          </h3>
          <p className="text-contrast-100">{company}</p>
          <p className="text-primary font-bold text-sm pt-16 mt-auto">
            {location}
          </p>
        </Link>
      </li>
    );
  }
);

export default Job;

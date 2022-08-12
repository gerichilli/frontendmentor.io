import React from "react";
import { Link } from "react-router-dom";

function Job({
  id,
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}) {
  return (
    <li>
      <Link to={`/view/${id}`} className="job-card" target="_blank">
        <div
          className="job-logo"
          style={{ backgroundColor: `${logoBackground}` }}
        >
          <img src={`/${logo}`} alt="" />
        </div>
        <div className="flex items-center">
          <span>{postedAt}</span>
          <span className="inline-block w-1 h-1 rounded-sm mx-3 bg-contrast" />
          <span>{contract}</span>
        </div>
        <h2 className="text-contrast-800 font-bold text-xl pt-2 pb-3">
          {position}
        </h2>
        <p>{company}</p>
        <p className="text-primary font-bold text-sm pt-10 mt-auto">
          {location}
        </p>
      </Link>
    </li>
  );
}

export default React.memo(Job);

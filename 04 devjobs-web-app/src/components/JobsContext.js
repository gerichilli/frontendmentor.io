import { createContext, useReducer, useState } from "react";
import { data } from "../data";

export const JobsContext = createContext();

function searchInString(string, term) {
  return string.toLowerCase().includes(term.toLowerCase());
}

function reducer(state, action) {
  switch (action.type) {
    case "SEARCH_JOBS":
      const query = action.payload;
      // When term is empty, ignore it when sorting
      return data
        .filter(function matchJobTitle(job) {
          if (query.title == "") return true;
          else return searchInString(job.position, query.title);
        })
        .filter(function matchJobLocation(job) {
          if (query.location == "") return true;
          else return searchInString(job.location, query.location);
        })
        .filter(function matchJobTime(job) {
          if (query.isFullTime == false) return true;
          else return job.contract == "Full Time";
        });
    case "REFRESH_JOBS":
      return data;
    default:
      return state;
  }
}

export function JobProvider({ children }) {
  const [jobs, dispatch] = useReducer(reducer, data);
  const [maxJobs, setMaxJobs] = useState(12);

  function searchJobs(query) {
    dispatch({ type: "SEARCH_JOBS", payload: query });
    setMaxJobs(12); // Reset maxJobs to 12 when search is performed
  }

  function refreshJobs() {
    dispatch({ type: "REFRESH_JOBS" });
    setMaxJobs(12); // Reset maxJobs to 12 when refresh is performed
  }

  const value = { jobs, searchJobs, refreshJobs, maxJobs, setMaxJobs };

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
}

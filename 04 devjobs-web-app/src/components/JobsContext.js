import { createContext, useReducer } from "react";
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

  function searchJobs(query) {
    dispatch({ type: "SEARCH_JOBS", payload: query });
  }

  function refreshJobs() {
    dispatch({ type: "REFRESH_JOBS" });
  }

  const value = { jobs, searchJobs, refreshJobs };

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
}

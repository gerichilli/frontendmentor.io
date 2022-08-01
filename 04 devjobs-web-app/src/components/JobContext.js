import React, { createContext, useEffect, useReducer } from "react";
import { data } from "../data";

export const JobContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const JobProvider = ({ children }) => {
  const [jobs, dispatch] = useReducer(reducer, data);

  const value = { jobs };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

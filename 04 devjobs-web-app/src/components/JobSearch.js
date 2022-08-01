import React, { useState } from "react";
import { ReactComponent as IconSearch } from "../assets/images/icon-search.svg";
import { ReactComponent as IconFilter } from "../assets/images/icon-filter.svg";

import useViewport from "../hooks/useViewport";
import JobFilter from "./JobFilter";
import Modal from "./Modal";

const JobSearch = () => {
  const { width } = useViewport();
  const smWidth = 640;
  const isFilterPopup = width < smWidth;

  const initialQuery = {
    title: "",
    location: "",
    isFullTime: false,
  };

  const [query, setQuery] = useState(initialQuery);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  const handleCheck = (event) => {
    setQuery({ ...query, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(query);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-contrast-50 px-4 rounded-md">
      <form className="flex" onSubmit={handleSubmit}>
        <label
          htmlFor="title"
          className="basis-1/3 xl:basis-2/5 flex items-center border-r border-contrast/20 py-4 xl:pl-4 pl-2 xl:pr-8 pr-5"
        >
          {!isFilterPopup && (
            <IconSearch
              className="mr-2 shrink-0 fill-primary"
              aria-hidden={true}
            />
          )}
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Filter by title, companies, expertise…"
            className="grow w-full h-full px-2 bg-transparent text-contrast-800 focus:outline-none focus:ring focus:ring-primary-100/20"
            value={query.title}
            onChange={handleInputChange}
          />
        </label>
        {isFilterPopup ? (
          showModal && (
            <Modal>
              <JobFilter
                location={query.location}
                isFullTime={query.isFullTime}
                onLocationChange={(event) => handleInputChange(event)}
                onFullTimeChange={(event) => handleCheck(event)}
              />
              <button
                className="btn-primary ml-7 my-4 xl:px-7 px-4"
                type="submit"
              >
                Search
              </button>
            </Modal>
          )
        ) : (
          <JobFilter
            location={query.location}
            isFullTime={query.isFullTime}
            onLocationChange={(event) => handleInputChange(event)}
            onFullTimeChange={(event) => handleCheck(event)}
          />
        )}
        {isFilterPopup && (
          <button className="ml-auto mr-2 my-4 xl:px-7 px-4" type="button" onClick={t}>
            <IconFilter className="fill-contrast" />
          </button>
        )}
        {isFilterPopup ? (
          <button className="btn-primary my-4 xl:px-7 px-4" type="submit">
            <IconSearch className="fill-white" />
          </button>
        ) : (
          <button className="btn-primary ml-7 my-4 xl:px-7 px-4" type="submit">
            Search
          </button>
        )}
      </form>
    </div>
  );
};

export default JobSearch;

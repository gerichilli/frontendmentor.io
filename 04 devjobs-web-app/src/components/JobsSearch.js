import { useState, useContext } from "react";
import { ReactComponent as IconSearch } from "../assets/images/icon-search.svg";
import { ReactComponent as IconFilter } from "../assets/images/icon-filter.svg";

import useViewport from "../hooks/useViewport";
import JobsFilter from "./JobsFilter";
import Modal from "./Modal";
import { JobsContext } from "./JobsContext";

function JobsSearch() {
  // When the screen width is less than 640px,
  // a popup filter is displayed instead.
  const { width } = useViewport();
  const smWidth = 640;
  const isFilterPopup = width < smWidth;

  const initialQuery = {
    title: "",
    location: "",
    isFullTime: false,
  };

  const { searchJobs } = useContext(JobsContext);
  const [query, setQuery] = useState(initialQuery);
  const [showModal, setShowModal] = useState(false);

  function handleInputChange(event) {
    setQuery({ ...query, [event.target.name]: event.target.value });
  }

  function handleCheck(event) {
    setQuery({ ...query, [event.target.name]: event.target.checked });
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchJobs(query);
    showModal && toggleModal();

    // setQuery(initialQuery);
  }

  return (
    <div className="bg-contrast-50 px-4 rounded-md">
      <form className="flex" onSubmit={handleSubmit} id="search">
        <label
          htmlFor="title"
          className="grow sm:grow-0 sm:basis-1/3 xl:basis-2/5 flex items-center sm:border-r sm:border-contrast/20 py-4 sm:pl-2 xl:pl-4 sm:pr-5 xl:pr-8"
        >
          <span className="sr-only">Title or companies or expertise</span>
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
            className="grow w-full h-full p-2 bg-transparent text-contrast-800 focus:outline-none focus:ring focus:ring-primary-100/20"
            value={query.title}
            onChange={handleInputChange}
          />
        </label>
        {isFilterPopup ? (
          showModal && (
            <Modal onClickOutside={toggleModal}>
              <JobsFilter
                location={query.location}
                isFullTime={query.isFullTime}
                onLocationChange={handleInputChange}
                onFullTimeChange={handleCheck}
              />
              <button
                className="btn-primary block m-6 mt-0 px-4"
                type="submit"
                form="search"
              >
                Search
              </button>
            </Modal>
          )
        ) : (
          <JobsFilter
            location={query.location}
            isFullTime={query.isFullTime}
            onLocationChange={handleInputChange}
            onFullTimeChange={handleCheck}
          />
        )}
        {isFilterPopup && (
          <button
            className="ml-auto mr-2 my-4 xl:px-7 px-4"
            type="button"
            onClick={toggleModal}
            aria-label="Filter"
          >
            <IconFilter className="fill-contrast" />
          </button>
        )}
        {isFilterPopup ? (
          <button
            className="btn-primary my-4 xl:px-7 px-4"
            type="submit"
            aria-label="Search"
          >
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
}

export default JobsSearch;

import { ReactComponent as IconLocation } from "../assets/images/icon-location.svg";
import { ReactComponent as IconCheck } from "../assets/images/icon-check.svg";

function JobsFilter({
  location,
  isFullTime,
  onLocationChange,
  onFullTimeChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row grow">
      <label
        htmlFor="location"
        className="grow flex items-center border-b sm:border-b-0 sm:border-r border-contrast/20 py-4 px-6 sm:px-5 xl:px-8 "
      >
        <IconLocation className="mr-2 shrink-0" aria-hidden={true} />
        <span className="sr-only">Location</span>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Filter by location…"
          className="grow w-full h-full p-2 bg-transparent text-contrast-800 focus:outline-none focus:ring focus:ring-primary-100/20"
          value={location}
          onChange={onLocationChange}
        />
      </label>
      <label
        htmlFor="fullTime"
        className="m-6 sm:my-4 sm:ml-4 flex items-center cursor-pointer"
      >
        <span className="relative">
          <input
            type="checkbox"
            name="isFullTime"
            id="fullTime"
            className="sr-only peer"
            checked={isFullTime}
            onChange={onFullTimeChange}
          />
          <span className="block peer w-6 h-6 bg-contrast-800 bg-opacity-10 rounded peer-checked:bg-primary peer-checked:bg-opacity-100"></span>
          <span className="block peer opacity-0 peer-checked:opacity-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <IconCheck aria-hidden={true} />
          </span>
        </span>
        <span className="ml-4 font-bold text-contrast-800 whitespace-nowrap">
          Full Time <span className="hidden xl:inline">Only</span>
        </span>
      </label>
    </div>
  );
}

export default JobsFilter;

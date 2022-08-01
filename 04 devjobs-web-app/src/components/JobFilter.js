import { ReactComponent as IconLocation } from "../assets/images/icon-location.svg";
import { ReactComponent as IconCheck } from "../assets/images/icon-check.svg";

const JobFilter = ({
  location,
  isFullTime,
  onLocationChange,
  onFullTimeChange,
}) => {
  return (
    <div className="flex grow">
      <label
        htmlFor="location"
        className="grow flex items-center border-r border-contrast/20 py-4 xl:px-8 px-5"
      >
        <IconLocation className="mr-2 shrink-0" aria-hidden={true} />
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Filter by location…"
          className="grow w-full h-full px-2 bg-transparent text-contrast-800 focus:outline-none focus:ring focus:ring-primary-100/20"
          value={location}
          onChange={onLocationChange}
        />
      </label>
      <label
        htmlFor="fullTime"
        className="my-4 ml-4 flex items-center cursor-pointer"
      >
        <div className="relative">
          <input
            type="checkbox"
            name="isFullTime"
            id="fullTime"
            className="sr-only peer"
            checked={isFullTime}
            onChange={onFullTimeChange}
          />
          <div className="peer w-6 h-6 bg-contrast-800 bg-opacity-10 rounded peer-checked:bg-primary peer-checked:bg-opacity-100"></div>
          <div className="peer opacity-0 peer-checked:opacity-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <IconCheck aria-hidden={true} />
          </div>
        </div>
        <span className="ml-4 font-bold text-contrast-800 whitespace-nowrap">
          Full Time <span className="hidden xl:inline">Only</span>
        </span>
      </label>
    </div>
  );
};

export default JobFilter;

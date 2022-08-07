import { useState, useEffect } from "react";

function useViewport() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
}

export default useViewport;

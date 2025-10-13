import { useEffect } from "react";

function ClickIDTracker() {
  useEffect(() => {
    try {
      const currentUrl = window.location.href;

      const urlParams = new URLSearchParams(window.location.search);
      const clickID = urlParams.get("clickID");

      if (clickID) {
        localStorage.setItem("clickID", clickID);
        document.cookie = `clickID=${clickID}; path=/; max-age=${60 * 60 * 24 * 30}`;
        console.log("ClickID stored in localStorage:", clickID);
      } else {
        const storedClickID = localStorage.getItem("clickID");
        console.log("No clickID in URL. Using stored clickID:", storedClickID);
      }
    } catch (error) {
      console.error("Error in ClickIDTracker:", error);
    }
  }, []);

  return null;
}

export default ClickIDTracker;

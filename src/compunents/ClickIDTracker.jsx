import { useEffect } from "react";

function ClickIDTracker() {
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);

      // ✅ Supports both "clickID" and "click_id" formats
      const clickID = urlParams.get("clickID") || urlParams.get("click_id");

      if (clickID) {
        // Store in localStorage
        localStorage.setItem("clickID", clickID);

        // Store in cookies (for servers or 3rd-party tools to read)
        document.cookie = `clickID=${clickID}; path=/; max-age=${60 * 60 * 24 * 30}`;

        console.log("ClickID stored in localStorage and cookie:", clickID);
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

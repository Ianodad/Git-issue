import { useState, useEffect } from "react";

function useWindowSize() {
  const isWindowClient = typeof window === "object";

  const [widthSize, setWidthSize] = useState(
    isWindowClient ? window.innerWidth : undefined
  );
  const [heightSize, setHeightSize] = useState(
    isWindowClient ? window.innerHeight : undefined
  );

  //👇
  useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setWidthSize(window.innerWidth);
      setHeightSize(window.innerHeight);
    }

    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener("resize", setSize);

      //un-register the listener
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWidthSize, setHeightSize]);
  //☝️

  return {widthSize, heightSize};
}

export default useWindowSize;
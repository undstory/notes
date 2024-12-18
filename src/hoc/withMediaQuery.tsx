import React, { useEffect, useState } from "react";

const withMediaQuery = (WrappedComponent: React.FC, query: string) => {
  const MediaQueryComponent: React.FC = (props) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
      const mediaQueryList = window.matchMedia(query);
      const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

      mediaQueryList.addEventListener("change", listener);
      return () => mediaQueryList.removeEventListener("change", listener);
    }, []);

    return matches ? <WrappedComponent {...props} /> : null;
  };
  return MediaQueryComponent;
};

export default withMediaQuery;

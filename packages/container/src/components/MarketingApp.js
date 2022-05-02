import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const onNavigate = ({ pathname: nextPathname }) => {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    };
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

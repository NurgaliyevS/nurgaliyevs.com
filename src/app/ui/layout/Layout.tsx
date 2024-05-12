"use client";

import useDeviceType from "@/shared/hooks/useDeviceType";
import { Mobile } from "@/shared/dynamic-routes/dynamic.route";
import Desktop from "../desktop/Desktop";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function Layout() {
  const isMobile = useDeviceType();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Page view",
    });
  }, []); // Empty dependency array ensures the effect runs only once after mounting

  return isMobile ? <Mobile /> : <Desktop />;
}

export default Layout;

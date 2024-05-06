"use client";

import useDeviceType from "@/shared/hooks/useDeviceType";
import { Mobile } from "@/shared/dynamic-routes/dynamic.route";
import Desktop from "../desktop/Desktop";

function Layout() {
    const isMobile = useDeviceType();

    return (
        isMobile ? <Mobile /> : <Desktop />
    );
}

export default Layout;
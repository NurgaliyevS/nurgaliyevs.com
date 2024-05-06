import dynamic from "next/dynamic";

export const Layout = dynamic(
  () => import("@/ui/layout/Layout"),
  {
    ssr: false,
  }
);
export const Mobile = dynamic(
    () => import("@/ui/mobile/Mobile"),
    {
      ssr: false,
    }
  );

export const Desktop = dynamic(
    () => import("@/ui/desktop/Desktop"),
    {
        ssr: false,
    }
);
  
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/styles/reset.css";
import "@/styles/global.css";
import ReactGA from "react-ga4";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Sabyr Nurgaliyev",
  description: "Front-end developer portfolio",
};

if (process?.env?.NEXT_PUBLIC_ANALYTICS_ID) {
  ReactGA.initialize(process.env.NEXT_PUBLIC_ANALYTICS_ID);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  );
}

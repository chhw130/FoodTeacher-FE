import type { Metadata } from "next";
import { ChakraLayout } from "@/app/ChakraLayout";
import QueryLayout from "./QueryLayout";
import TheMainHeader from "../../component/header/TheMainHeader";
import GoogleAnalytics from "./GoogleAnalytics";
import ResponsiveLayout from "./ResponsiveLayout";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "http://fe-fe-544a1-21216457-67a2ef796b03.kr.lb.naverncp.com/"
  ),
  title: "식선생",
  description: "당신의 식단 관리 서비스",

  openGraph: {
    title: "식선생",
    description: "당신의 식단 관리 서비스",
    url: "www.foodteacher.xyz ",
    siteName: "foodteacher",
    images: [
      {
        url: "../../utils/img/OGImg.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "../../utils/img/OGImg.jpg",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" style={{ height: "100%" }} suppressHydrationWarning>
      <head>
        <link rel="icon" href="%PUBLIC_URL%/logo.ico" />
      </head>
      <body suppressHydrationWarning={true}>
        <GoogleAnalytics />
        <QueryLayout>
          <ChakraLayout>
            <ResponsiveLayout>{children}</ResponsiveLayout>
          </ChakraLayout>
        </QueryLayout>
      </body>
    </html>
  );
}

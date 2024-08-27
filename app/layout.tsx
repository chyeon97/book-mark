import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import {Header, Navigation, MobileNavigation, Box} from "@/components";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BookMark",
  description: "나중에 방문할 페이지를 잊지 않도록 기록 해보세요",
  icons: {
    icon: '/bookmark.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="ko">

      <body>
        <div className={`flex flex-col overflow-hidden sm:overflow-auto`}>
          <Header/>
          <MobileNavigation/>
          <Navigation/>

          <Box>
            {children}
          </Box>
        </div>
      </body>

    </html>
  );
}

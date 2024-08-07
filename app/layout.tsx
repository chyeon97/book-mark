import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

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
      <body className={`w-screen h-screen ${inter.className} bg-white dark:bg-gray-950`}>
        {children}
      </body>
    </html>
  );
}

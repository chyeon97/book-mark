import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "./_components"

const inter = Noto_Sans_KR({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "BookMark",
  description: "나중에 방문할 페이지를 잊지않도록 기록해보세요",
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
    <html lang="en">
      <body className={`w-screen h-screen ${inter.className}`}>
      {/* <Header list={headerList} bgColor=""/> */}
        {children}
      </body>
    </html>
  );
}

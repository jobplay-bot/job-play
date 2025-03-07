import type {Metadata} from "next";
import "./globals.css";
import {Poppins} from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500','600','700', '800', '900'],
    variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Job Play",
  description: "지원자에게 이력서를 받아서 매칭해주는 서비스 취업 컨설팅",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
      {children}
      </body>
      </html>
  );
}

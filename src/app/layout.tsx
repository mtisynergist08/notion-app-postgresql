import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./header";
import Sidebar from "./sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion Minimal Version NextJS",
  description:
    "A simple notion minimal version to learn NextJS13, Prisma and Postgres",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex gap-[1rem]">
          <nav className="bg-slate-100 p-[1rem] flex flex-col min-h-screen w-1/4">
            <Sidebar />
          </nav>
          <section className="w-3/4">{children}</section>
        </div>
      </body>
    </html>
  );
}

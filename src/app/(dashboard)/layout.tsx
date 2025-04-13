import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashbordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:[8%] xl:w-[14%] p-4 overflow-y-scroll">
        <Link href={"/"} className="flex items-center justify-center lg:justify-start gap-2">
        <Image src={"/logo.png"} alt="Logo" width={32} height={32}/>
        <span className="hidden lg:block font-bold">School Management</span>
        </Link>
        <Menu/>
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-scroll">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaldis Academy | Learning Management System for Schools",
  description:
    "Kaldis Academy is a modern, full-stack Learning Management System designed for schools, teachers, parents, and students. Manage schedules, exams, results, and events from an intuitive dashboard with role-based access.",
  keywords: [
    "Learning Management System",
    "School Management Dashboard",
    "Online School Platform",
    "Student Portal",
    "Teacher Dashboard",
    "Parent Dashboard",
    "Exam Schedule Management",
    "School Events Management",
    "Full Stack LMS",
  ],
  authors: [{ name: "Estifanos Kebede" }],
  openGraph: {
    title: "Kaldis Academy | Learning Management System for Schools",
    description:
      "A full-stack LMS that connects teachers, parents, and students with real-time schedules, exam results, and event updates. Built for modern schools.",
    url: "https://kaldisacadamy.vercel.app", // replace with your actual domain
    siteName: "Kaldis Academy",
    images: [
      {
        url: "https://kaldisacadamy.vercel.app/Kaldis_Home.png", // replace with preview image
        width: 1200,
        height: 630,
        alt: "Kaldis Academy School Management Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children} <ToastContainer position="bottom-right" theme="dark" />
        </body>
      </html>
    </ClerkProvider>
  );
}
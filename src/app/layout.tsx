import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al-Ryada University for Science and Technology (RST)",
 
  description:
    "Al-Ryada University for Science and Technology (RST) – the first private university in Sadat City, Menoufia Governorate, Egypt. Offering faculties in Dentistry, Physical Therapy, Computers & AI, Engineering, Business Administration, and Nursing. Apply now for Academic Year 2025-2026.",
  keywords: [
    "Al-Ryada University",
    "RST",
    "private university Egypt",
    "Sadat City",
    "Menoufia Governorate",
    "Dentistry",
    "Physical Therapy",
    "Computers and Artificial Intelligence",
    "Engineering",
    "Business Administration",
    "Nursing",
    "University admission Egypt",
  ],
   icons: {
     icon: [ 
      { url: "/RST-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/fRST-logo.png", sizes: "any" },
    ],
    shortcut: "/RST-logo.png",
    apple: "/RST-logo.png",
  },

    
  authors: [{ name: "Al-Ryada University for Science and Technology" }],
  openGraph: {
    title: "Al-Ryada University for Science and Technology (RST)",
    description:
      "Apply now for the first semester of 2025-2026 at Al-Ryada University – the first private university in Sadat City, Menoufia Governorate, Egypt.",
    // url: "https://rst.edu.eg/",
    siteName: "Al-Ryada University for Science and Technology",
    type: "website",
    // Uncomment & set image when available:
     images: ["https://rst.edu.eg/path/to/og-image.jpg"],
  },
 
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link
          rel="preload"
          as="video"
          href="/DiscoverRSTUniversity/RST.mp4"
          type="video/mp4"
        />
      </Head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

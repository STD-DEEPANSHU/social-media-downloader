import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social Media Downloader",
  description:
    "Download videos from YouTube, Instagram & TikTok with a blazing-fast engine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}

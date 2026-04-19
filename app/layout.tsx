import "./globals.css";

export const metadata = {
  title: "Social Media Downloader",
  description: "Download videos instantly",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Posts | JSONPlaceholder",
  description: "Website displaying posts from a free and reliable fake API",
  openGraph: {
    title: "JSONPlaceholder",
    type: "website",
    locale: "en_US",
    siteName: "Posts | JSONPlaceholder",
    url: "https://1732-jsonplaceholder-posts.vercel.app/",
    description: "Website displaying posts from a free and reliable fake API",
    images: "https://aj1732.github.io/jsonplaceholder_posts/public/favicon_io/android-chrome-192x192.png",
  },
  icons: {
    icon: ["/favicon_io/favicon.ico?v=4"],
    apple: ["/favicon_io/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon_io/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <Navbar />
        <main className="full-width content-grid min-h-dvh pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

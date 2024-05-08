import { fontSans } from "@/config/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoteSync",
  description: "Your connected workspace for wiki, docs and projects",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/icon.png",
      href: "/icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
    </html>
  );
}

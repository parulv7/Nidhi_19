
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Little Surprise for You ❤️",
  description:
    "A birthday letter, our favourite memories, and one very special question.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

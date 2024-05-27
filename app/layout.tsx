import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Richil Stanley",
  description:
    "In this portfolio, discover the different projects of Stanley a web developer based in Cameroun. Contact him to discuss about your next project.",
  keywords:
    "Web development, frontend developer, Next.js developer, portfolio, Stanley, Richil, Nouping, web, internet, Cameroon, Douala",
  icons: {
    icon: "/profile.jpg",
  },
  openGraph: {
    images: "/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

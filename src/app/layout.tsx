import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from '@/components/ScrollToTop';
import Aoscompo from "@/utils/aos";
import NextTopLoader from 'nextjs-toploader';
import { AuthDialogProvider } from "./context/AuthDialogContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vertexinnovation.vercel.app"),
  applicationName: "Vertex",
  title: {
    default: "Vertex | Digital Solutions Agency",
    template: "%s | Vertex",
  },
  description:
    "Vertex is a premium digital solutions agency building modern websites, SaaS platforms, AI integrations, and scalable software products.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Vertex | Digital Solutions Agency",
    description:
      "Premium digital solutions agency for modern software, SaaS, AI, and cloud delivery.",
    siteName: "Vertex",
    images: [
      {
        url: "/images/brand/vertex-preview.jpg",
        width: 1360,
        height: 648,
        alt: "Vertex logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertex | Digital Solutions Agency",
    description:
      "Premium digital solutions agency for modern software, SaaS, AI, and cloud delivery.",
    images: ["/images/brand/vertex-mark.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <NextTopLoader />
      <AuthDialogProvider>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
        </AuthDialogProvider>
      </body>
    </html>
  );
}

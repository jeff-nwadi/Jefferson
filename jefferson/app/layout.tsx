import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import { Kameron } from "next/font/google";
import { Gasoek_One } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TransitionProvider } from "@/context/TransitionContext";
import { TransitionOverlay } from "@/components/TransitionOverlay";
import { SmoothScroll } from "@/components/SmoothScroll";
import { LoaderProvider } from "@/context/LoaderContext";


const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-playfair-display",
})
const kameron = Kameron({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-kameron",
})
const gasoekOne = Gasoek_One({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-gasoek-one",
})

const BebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue"
})

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

const BespokeSans = localFont({
    src: "../public/fonts/BespokeSans-Regular.otf",
    weight: "700",
    style: "normal",



    variable: "--font-bespoke-sans",
})

export const metadata: Metadata = {
  title: "Jefferson - Frontend Developer",
  description: "Welcome to my portfolio. I'm Jefferson, a frontend developer passionate about crafting high-performance web applications.",
};

import { Preloader } from "@/components/Preloader";
import { ScrollToTop } from "@/components/ScrollToTop";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${satoshi.variable} ${BespokeSans.variable} ${BebasNeue.variable} ${gasoekOne.variable} ${kameron.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            forcedTheme="dark"
            disableTransitionOnChange
        >
            <LoaderProvider>
                <TransitionProvider>
                    <SmoothScroll />
                    <TransitionOverlay />
                    <Preloader />
                    <ScrollToTop />
                    {children}
                </TransitionProvider>
            </LoaderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import { Barlow_Condensed, Barlow, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--ff-head",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--ff-body",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--ff-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FINVISION — Real Market Understanding",
    template: "%s | FINVISION",
  },
  description:
    "FINVISION is a financial markets education institute based in Raipur, India. Learn Forex trading, price action, risk management, and trading psychology from real practitioners.",
  keywords: [
    "forex trading course", "trading institute raipur", "finvision",
    "financial markets education", "trading psychology", "risk management",
    "price action trading", "learn forex india",
  ],
  authors: [{ name: "FINVISION" }],
  metadataBase: new URL("https://www.myfinvision.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "FINVISION",
    title: "FINVISION — Real Market Understanding",
    description:
      "Financial markets education institute based in Raipur, India. Learn Forex trading, risk management, and trading psychology from real practitioners.",
    url: "https://www.myfinvision.com",
    images: [{ url: "/favicon.png", width: 512, height: 512, alt: "FINVISION" }],
  },
  twitter: {
    card: "summary",
    title: "FINVISION — Real Market Understanding",
    description: "Financial markets education institute based in Raipur, India.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${barlowCondensed.variable} ${barlow.variable} ${shareTechMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon.png" />
      </head>
      <body>
        {children}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wqxedijb5m");`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1XFDX4K6DS"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-1XFDX4K6DS');`,
          }}
        />
      </body>
    </html>
  );
}

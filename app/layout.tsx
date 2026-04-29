import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FINVISION — Real Market Understanding",
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700;1,800&family=Barlow:wght@300;400;500;600&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

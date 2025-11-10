import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast"; 

const haloDek = localFont({
  src: "../../public/fonts/HaloDek.ttf",
  variable: "--font-halo",
  display: "swap",
});

const norticaRegular = localFont({
  src: "../../public/fonts/NorticaTypeface-Regular.ttf",
  variable: "--font-nortica-regular",
  display: "swap",
});

const norticaMedium = localFont({
  src: "../../public/fonts/NorticaTypeface-Medium.ttf",
  variable: "--font-nortica-medium",
  display: "swap",
});

const norticaSemiBold = localFont({
  src: "../../public/fonts/NorticaTypeface-SemiBold.ttf",
  variable: "--font-nortica-semibold",
  display: "swap",
});

const norticaBold = localFont({
  src: "../../public/fonts/NorticaTypeface-Bold.ttf",
  variable: "--font-nortica-bold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Canvas",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className={`${haloDek.variable} ${norticaRegular.variable} ${norticaMedium.variable} ${norticaSemiBold.variable} ${norticaBold.variable}`}
      >
        {children}
        
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}

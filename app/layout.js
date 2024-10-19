import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const playfair = localFont({
  src: "./fonts/PlayfairVariable.ttf",
  variable: "--font-playfair",
  weight: "100 900",
})

const openSans = localFont({
  src: "./fonts/OpenSansVariable.ttf",
  variable: "--font-open-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Brikbloom Property Sourcing",
  description: "Brikbloom Property Sourcing is a family-run business that connects property developers with opportunities that are both dependable and full of promise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${openSans.className} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next"
import { roboto, genos } from "@/lib/fonts"
import "./globals.css" 
import AOSInitializer from "@/components/AOSInitializer"


export const metadata: Metadata = {
  title: "Arjun A | Portfolio",
  description: "Portfolio showcasing my work as a MERN Stack Developer.",
  icons: '/svg/my_logo.svg'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${genos.variable}`}
    >
      <body
        className='antialiased bg-black text-white'
      >
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next"
import "./globals.css" 


export const metadata: Metadata = {
  title: "Arjun A | Portfolio",
  description: "Portfolio showcasing my work as a MERN Stack Developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className='antialiased bg-black text-white'
      >
        {children}
      </body>
    </html>
  );
}

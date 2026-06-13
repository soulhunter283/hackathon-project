import { ClerkProvider } from '@clerk/nextjs';
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body 
          className={`${spaceGrotesk.className} bg-[#0a0514] text-white antialiased selection:bg-[#c0ff00] selection:text-black`}
        >
          {/* We add the Navbar back here so it appears on every page */}
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
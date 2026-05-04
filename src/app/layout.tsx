import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TBD Installatietechniek | Elektrotechniek in Cuijk",
  description: "Elektrotechniek zonder gedoe in Cuijk en omgeving. Laadpalen, groepenkasten, zonnepanelen, thuisbatterijen en storingen. Vakkundig, snel en betaalbaar.",
  keywords: "elektrotechniek, elektricien, Cuijk, laadpaal, groepenkast, zonnepanelen, thuisbatterij, storingen",
  openGraph: {
    title: "TBD Installatietechniek | Elektrotechniek in Cuijk",
    description: "Elektrotechniek zonder gedoe in Cuijk en omgeving. Laadpalen, groepenkasten, zonnepanelen en meer.",
    type: "website",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

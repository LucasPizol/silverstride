import type { Metadata } from "next";
import "./styles.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "SilverStride Physical Therapy Center LLC - Fisioterapia Especializada para Idosos",
  description:
    "Fisioterapia especializada e compassiva para adultos mais velhos. Ajudamos você a manter independência, força e dignidade no processo de envelhecimento.",
  keywords:
    "fisioterapia, geriatria, idosos, reabilitação, prevenção de quedas, terapia manual",
  authors: [{ name: "SilverStride Physical Therapy Center LLC" }],
  openGraph: {
    title: "SilverStride Physical Therapy Center LLC",
    description: "Fisioterapia especializada para adultos mais velhos",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`antialiased ${montserrat.className}`}>{children}</body>
    </html>
  );
}

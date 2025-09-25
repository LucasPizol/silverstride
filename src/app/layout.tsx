import type { Metadata } from "next";
import "./styles.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "SilverStride Physical Therapy Center LLC - Specialized Physical Therapy for Seniors",
  description:
    "Specialized and compassionate physical therapy for older adults. We help you maintain independence, strength and dignity in the aging process.",
  keywords:
    "physical therapy, geriatrics, seniors, rehabilitation, fall prevention, manual therapy",
  authors: [{ name: "SilverStride Physical Therapy Center LLC" }],
  openGraph: {
    title: "SilverStride Physical Therapy Center LLC",
    description: "Specialized physical therapy for older adults",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased ${montserrat.className}`}>{children}</body>
    </html>
  );
}

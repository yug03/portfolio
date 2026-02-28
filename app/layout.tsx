import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yug Pratap Gupta | AI Automation & Business Systems Engineer",
  description:
    "Senior AI Automation Engineer specializing in workflow systems, finance automation, and AI-driven business intelligence for fintech, NBFC, and SaaS companies.",
  keywords: [
    "AI Automation Engineer",
    "Business Systems Engineer",
    "Finance Automation",
    "Workflow Automation",
    "Python Developer",
    "Gurgaon India",
    "NBFC Automation",
    "CRM ERP Integration",
    "n8n Zapier Make",
    "GCP Cloud Engineer",
  ],
  authors: [{ name: "Yug Pratap Gupta" }],
  creator: "Yug Pratap Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yugpratapgupta.dev",
    title: "Yug Pratap Gupta | AI Automation & Business Systems Engineer",
    description:
      "I design AI-driven workflow systems and automation architectures for finance, NBFC, SaaS, and operations-heavy companies.",
    siteName: "Yug Pratap Gupta Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yug Pratap Gupta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yug Pratap Gupta | AI Automation & Business Systems Engineer",
    description:
      "I design AI-driven workflow systems and automation architectures for finance, NBFC, SaaS, and operations-heavy companies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#07090f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-body bg-canvas text-text-primary noise-overlay">
        {children}
      </body>
    </html>
  );
}

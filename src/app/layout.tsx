import { type Metadata } from "next";

import { RootLayout } from "~/components/RootLayout";

import "~/styles/tailwind.css";

export const metadata: Metadata = {
  title: "CryptoBloom",
  description: "CryptoBloom is a business suite for crypto businesses.",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full bg-neutral-950 text-base antialiased'>
      <body className='flex min-h-full flex-col'>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}

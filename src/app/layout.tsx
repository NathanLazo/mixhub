import { Analytics } from "@vercel/analytics/react";

import { type Metadata } from "next";

import { RootLayout } from "~/components/RootLayout";

import "~/styles/tailwind.css";

export const metadata: Metadata = {
  title: "Mixhub!",
  description:
    "Mixhub! is a web3 marketplace where people can enjoy their music in a whole new experience.",
  manifest: "/manifest.json",
  openGraph: {
    images: [
      "https://pbs.twimg.com/profile_images/1709416310633811968/XT2Osy0s_400x400.jpg",
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full bg-neutral-950 text-base antialiased'>
      <body className='flex min-h-full flex-col'>
        <RootLayout>
          {children}
          <Analytics />
        </RootLayout>
      </body>
    </html>
  );
}

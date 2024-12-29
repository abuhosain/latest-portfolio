"use client";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "../context/user.provider";
import { NextUIProvider } from "@nextui-org/system";

import { useRouter } from "next/navigation";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  const router = useRouter();

  return (
    <html lang="en">
      <head>
        <title>Abu Hosain</title>
        <meta
          name="description"
          content="I am a full-stack developer, and I love to build web applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`antialiased ${inter.variable} ${bebasNeue.variable}`}>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <NextUIProvider navigate={router.push}>
              <Toaster />
              {children}
            </NextUIProvider>
          </UserProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

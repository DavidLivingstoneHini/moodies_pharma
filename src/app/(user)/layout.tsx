"use client"
import "swiper/swiper.min.css"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { Inter } from "next/font/google"
import { theme } from "../theme"
import Navbar from "@/components/Navbar/Navbar"
import { AppContextProvider } from "@/context/AppContext"
import { Footer } from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Moodies Chemist</title>
      <meta title="description" content="Ecommerce" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon.png" />
      <body className={inter.className}>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <AppContextProvider>
              <Navbar />
              {children}
              <WhatsAppButton />
              <Footer />
            </AppContextProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}

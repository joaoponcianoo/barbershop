import { Inter } from "next/font/google"
import "./globals.css"
// import { Toaster } from "./_components/ui/sonner"
// import { Footer } from "./_components/footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        {children}
        {/* <Toaster />
        <Footer /> */}
      </body>
    </html>
  )
}
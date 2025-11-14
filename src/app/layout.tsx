import Script from "next/script";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppWrapper from "@/components/appwrapper";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const gordita = localFont({
  src: [
    { path: "../../public/fonts/gordita/Gordita-Regular.woff", weight: "400" },
    { path: "../../public/fonts/gordita/Gordita-Medium.woff", weight: "500" },
    { path: "../../public/fonts/gordita/Gordita-Bold.woff", weight: "700" },
  ],
  variable: "--font-gordita",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gordita.variable} font-gordita`}>
        <AppWrapper>{children}</AppWrapper>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          theme="colored"
        />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

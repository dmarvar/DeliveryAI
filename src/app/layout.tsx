import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppBar } from "@/components/AppBar/AppBar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/light.theme";
import { Footer } from "@/components/Footer/Footer";
import Providers from "./providers";

const inter = Roboto({ subsets: ["latin"], weight: ["100", "700"] });

export const metadata: Metadata = {
  title: "Cegid Developer Portal",
  description:
    "Elevate your digital connectivity with Cegid API Management – where innovation meets integration. Unleash the power of seamless API management to transform your digital landscape. Secure, scale, and succeed with Cegid, redefining the way you manage APIs for unparalleled efficiency and growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <AppBar />
              {children}
              <Footer />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}

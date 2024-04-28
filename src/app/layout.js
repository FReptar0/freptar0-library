"use client";
import theme from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider
          options={{
            cache: true,
            cacheTTL: 1000 * 60 * 60 * 24,
            cacheKey: "cacheKey",
          }}
        >
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

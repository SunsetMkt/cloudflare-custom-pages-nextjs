import "@/styles/globals.css";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
      <Head>
        <title>{siteConfig.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Providers>
  );
}

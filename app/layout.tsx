import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import { SiteThemeProvider } from '@/providers/theme';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import getEnv from '@/config/env';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '[.shovon]',
  description: 'Personal Portfolio || [.shovon]',
  metadataBase: new URL('https://shovon.me'),
  openGraph: {
    images: '/assets/images/og-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-[#232425] bg-white flex min-h-svh flex-col`}>
        <SiteThemeProvider>
          <Header />
          <main className="flex flex-col flex-auto items-center justify-center m-0">{children}</main>
          <Footer />
        </SiteThemeProvider>
      </body>
      <Script src={getEnv("UMAMI_URL")} data-website-id={getEnv("UMAMI_SITE_ID")} />
      <Script id="ms_clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${getEnv("CLARITY_PROJECT_ID")}");`}
      </Script>
      <GoogleAnalytics gaId={getEnv("GOOGLE_TAG_MANAGER_ID") ?? ''} />
    </html>
  );
}

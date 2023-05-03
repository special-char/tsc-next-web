import { Kumbh_Sans, Newsreader, Flow_Block } from '@next/font/google';
import '@/styles/globals.css';
import { Suspense } from 'react';
import Footer from './footer';
import Header, { HeaderSkeleton } from './header';
import SideNav, { SideNavSkeleton } from './sideNav';
import WhatsAppIcon from '@/public/icons/whatsapp.svg';
import Script from 'next/script';

const kumbSans = Kumbh_Sans({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-kumbh',
});

const newsreader = Newsreader({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-newsreader',
});

const flowBlock = Flow_Block({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-block',
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${kumbSans.variable} font-sans ${newsreader.variable} font-serif ${flowBlock.variable} font-cursive`}
    >
      {/* <head /> */}
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WS7JTT5H0J"
          strategy="worker"
        />
        <Script id="google-analytics" strategy="worker">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-WS7JTT5H0J');
        `}
        </Script>
        <Suspense fallback={<SideNavSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <SideNav />
        </Suspense>
        <div>
          <Suspense fallback={<HeaderSkeleton />}>
            {/* @ts-expect-error Async Server Component */}
            <Header />
          </Suspense>
          <main>{children}</main>
          <Footer />
          <div className="fixed bottom-[86px] right-[6px] z-50 h-16 w-16">
            <a
              className="relative flex h-[60px] w-[60px]"
              href="https://api.whatsapp.com/send/?phone=%2B917600096432&text&type=phone_number&text=I%20want%20to%20understand%20about"
              target="_blank"
            >
              <span className="sr-only">Whats App Icon</span>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366]">
                <WhatsAppIcon height={30} width={30} fill="#FFF" />
              </span>
            </a>
          </div>
        </div>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                    var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"cdea135c17538d4cc3ccec6d9d85d171ded207c9843813e91d42a6f4bf06b039f7dd2932db4019f30578c12be02d9036", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
                        `,
          }}
        ></Script>
      </body>
    </html>
  );
}

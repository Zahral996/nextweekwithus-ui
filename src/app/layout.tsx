import "../styles/globals.css"; 
import { ReactNode } from 'react';
import Head from 'next/head';
import Header from "@/components/Landing/Header/Header";
import Footer from "@/components/Shared/Footer/Footer";

export const metadata = {
  title: "NextWeekWithUs",
  description: "Journey Together: Plan Your Next Adventure",
};

export default function RootLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

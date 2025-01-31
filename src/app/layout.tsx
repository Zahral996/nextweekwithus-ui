'use client'
import Header from "@/components/Landing/Header/Header";
import "../styles/globals.css"; 
import Head from 'next/head';
import Footer from "@/components/Shared/Footer/Footer";
import { useEffect } from 'react';

export default function RootLayout({ children, locale }: { children: React.ReactNode; locale: string }) {
    useEffect(() => {
        const storedLocale = localStorage.getItem('locale');
        if (storedLocale) {
            
        }
    }, []);
    console.log("Locale in RootLayout:", locale);
    return (
        <html lang={locale} className={locale === "fa" ? "rtl" : "ltr"}>
            <Head>
                <title>NextWeekWithUs</title>
                <meta name="description" content="Journey Together: Plan Your Next Adventure"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <body>
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
import Header from "@/components/Landing/Header/Header";
import "../styles/globals.css"; 
import Head from 'next/head';
import Footer from "@/components/Shared/Footer/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
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


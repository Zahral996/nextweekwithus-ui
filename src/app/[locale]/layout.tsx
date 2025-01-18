
import "../../styles/globals.css"; 
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}) {

  const { locale } = await params;

    // if (!routing.locales.includes(locale as any)) {
    //     notFound();
    // }

    // Await the promise returned by getMessages
    // const messages = await getMessages();

    return (
        <html lang={locale}>
            {/* <head>
                <link rel="icon" href="/favicon.ico" />
            </head> */}
            <body>
                {/* <NextIntlClientProvider messages={messages}> */}
                    {children}
                {/* </NextIntlClientProvider> */}
            </body>
        </html>
    );
}

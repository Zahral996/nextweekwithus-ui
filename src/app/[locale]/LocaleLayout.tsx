import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

// Define a type for the locale based on routing.locales
type Locale = typeof routing.locales[number];

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>
}) {
    const { locale } = await params;

    // Check if the locale is valid
    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}

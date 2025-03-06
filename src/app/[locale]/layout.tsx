import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

type Locale = typeof routing.locales[number];

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: Locale };
}) {
    const { locale } = params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages({ locale });
    return (
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}
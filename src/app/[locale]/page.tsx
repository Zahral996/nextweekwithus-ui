import { useTranslations } from 'next-intl';
import Category from '@/components/landing/category/Category';
import Features from '@/components/landing/features/Features';
import HomeHero from '@/components/landing/home-hero/HomeHero';
import HowWorks from '@/components/landing/how-works/HowWorks';
import Join from '@/components/landing/join/Join';
import LastEvents from '@/components/landing/last-events/LastEvents';
import UpcomingEvents from '@/components/landing/upcoming-events/UpcomingEvents';

export default function Home() {
    const t = useTranslations('index');
    return (
        <div>
            <h1>{t('title')}</h1>
            <HomeHero />
            <Category />
            <UpcomingEvents />
            <Join />
            <HowWorks />
            <LastEvents />
            <Features />
        </div>
    );
}
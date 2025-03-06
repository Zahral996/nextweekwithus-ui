import { useTranslations } from 'next-intl';
import Category from '@/components/Landing/Category/Category';
import Features from '@/components/Landing/Features/Features';
import HomeHero from '@/components/Landing/HomeHero/HomeHero';
import HowWorks from '@/components/Landing/HowWorks/HowWorks';
import Join from '@/components/Landing/Join/Join';
import LastEvents from '@/components/Landing/LastEvents/LastEvents';
import UpcomingEvents from '@/components/Landing/UpcomingEvents/UpcomingEvents';

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
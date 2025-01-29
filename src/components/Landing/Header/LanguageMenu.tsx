'use client';

import { Menu } from '@headlessui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Link } from '@/i18n/routing';

const languages = [
  { code: 'en', label: 'English', flag: '/images/icons/flags/uk-flag-round-circle-icon.svg' },
  { code: 'fa', label: 'Persian', flag: '/images/icons/flags/iran-flag-round-circle-icon.svg' },
  { code: 'ar', label: 'Arabic', flag: '/images/icons/flags/united-arab-emirates-flag-round-circle-icon.svg' },
  { code: 'de', label: 'German', flag: '/images/icons/flags/germany-flag-round-circle-icon.svg' },
  { code: 'es', label: 'Spanish', flag: '/images/icons/flags/spain-country-flag-round-icon.svg' },
];

const LanguageMenu = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); 

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setSelectedLanguage(JSON.parse(savedLanguage));
    }
  }, []);

  const changeLanguage = (lang: { code: string; label: string; flag: string }) => {
    setSelectedLanguage(lang);
    localStorage.setItem('preferredLanguage', JSON.stringify(lang));
    console.log(`Language changed to ${lang.code}`);
  };

  useEffect(() => {
    document.documentElement.lang = selectedLanguage.code;
  }, [selectedLanguage]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center items-center w-full rounded-md py-2 bg-white text-sm font-medium hover:bg-gray-50">
          <Image width={100} height={100} src={selectedLanguage.flag} alt={`${selectedLanguage.label} flag`} className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">{selectedLanguage.label}</span>
        </Menu.Button>
      </div>
      <Menu.Items className="absolute right-0 z-30 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        {languages.map((language) => (
          <Menu.Item key={language.code}>
            {({ active }) => (
              <Link locale={language.code} href={"/"}>
                <button
                  onClick={() => changeLanguage(language)}
                  className={`${
                    active ? 'bg-teal-800 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  <Image width={100} height={100} src={language.flag} alt={`${language.label} flag`} className="w-5 h-5 mr-2" />
                  {language.label}
                </button>
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );  
};

export default LanguageMenu;

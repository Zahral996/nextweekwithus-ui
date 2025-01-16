'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageMenu from './LanguageMenu';
import Button from '@/components/Shared/Button/Button';


const Header: React.FC  = () => {

    return (
        <header className="w-full flex flex-row justify-between items-center px-2 lg:px-10 py-2 border-b-[8px] border-double border-teal-800">
            <div className="logo w-[30%] flex flex-col gap-y-0 flex-shrink-0 items-center lg:items-start">
                <Link href={'/'}>
                    <Image width={200} height={200} className='w-[130px] h-[50px]' src={"/images/logo/logo_header.png"} alt="logo" />
                </Link>
            </div>
            <div className="links w-[70%] flex flex-row gap-x-1 sm:gap-x-3 items-center justify-end">
                <LanguageMenu/>
                <Link href={"/login"} className="py-2 px-2 text-sm font-bold">Log in</Link>
                <Button href={"/signup"} btnName={"Sign up"}/>
            </div>
        </header>
    );
};

export default Header;

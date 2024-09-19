"use client";

import Link from 'next/link'
import { MainLogo } from './MainLogo';
import { usePathname } from 'next/navigation';

const routes = {
    '/': 'Home',
    '/order': 'Orders / Locations',
    '/hours': 'Hours'
};

export const Header = () => {
    const pathname = usePathname();

    return (
        <nav className="flex flex-row justify-between align-middle p-4 lg:p-6 border-gray-500 border-b-[1px] text-md lg:text-lg ">
            <MainLogo />
            <ul className='flex flex-row gap-5 text-gray-800'>
                {Object.entries(routes).map(([route, title]) => (
                    <li key={route} className={`m-auto hover:underline hover:text-red-700 ${pathname === route ? 'font-semibold' : ''}`}>
                        <Link href={route}>{title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
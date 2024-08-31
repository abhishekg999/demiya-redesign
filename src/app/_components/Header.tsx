import Link from 'next/link'
import { MainLogo } from './MainLogo';

export const Header = () => {
    return (
        <nav className="flex flex-row justify-between align-middle p-4 lg:p-6 border-gray-500 border-b-[1px] text-md lg:text-lg ">
            <MainLogo />
            <ul className='flex flex-row gap-2 lg:gap-5'>
                <li className='m-auto hover:underline hover:text-red-700'><Link href='/'>Home</Link></li>
                <li className='m-auto hover:underline hover:text-red-700'><Link href='/order'>Orders / Locations </Link></li>
                <li className='m-auto hover:underline hover:text-red-700'><Link href='/hours'>Hours</Link></li>
            </ul>
        </nav>
    )
}
"use client";

import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

export const MainLogo = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div onClick={() => router.push('/')} className={pathname === "/" ? "" : "hover:cursor-pointer"}>
            <Image
                src="/logo.jpeg"
                alt="Demiya Logo"
                width={50}
                height={50}></Image>
        </div>
    )
}
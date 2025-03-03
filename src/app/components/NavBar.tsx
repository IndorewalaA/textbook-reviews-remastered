"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { poppins_reg, poppins_bold } from './fonts';    
import { SearchBarSmall } from './Search';

export default function NavBar() {
    const pathname = usePathname()
    console.log(pathname)
    const isHome = pathname === "/"
    return (
        <div className="flex flex-row justify-between p-8 tx-dark-brown">
            <h1 className={`text-2xl bg-gradient-to-r from-orange-600 to-blue-800 bg-clip-text text-transparent ${poppins_reg.className}`}>
                 RateYour<span className={poppins_bold.className}>Textbooks</span>
            </h1>
            {!isHome && (<SearchBarSmall/>)}
            <div className="space-x-4 text-lg">
                <Link href="">Courses</Link>
                <Link href="">Login</Link>
                <Link href="">Register</Link>
            </div>
        </div>
    );
}
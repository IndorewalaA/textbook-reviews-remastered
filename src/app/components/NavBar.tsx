"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { poppins_reg, poppins_bold, nunito_reg } from './fonts';    

export default function NavBar() {
    const pathname = usePathname()
    console.log(pathname)
    const isHome = pathname === "/"
    return (
        <div className="flex flex-row justify-between p-8 tx-dark-brown">
            <h1 className={`text-2xl ${poppins_reg.className}`}>
                 RateYour<span className={poppins_bold.className}>Textbooks</span>
            </h1>
            {!isHome && (
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 rounded bg-gray-100 tx-dark-brown border"
                />
            )}
            <div className="space-x-4 text-lg">
                <Link href="">Courses</Link>
                <Link href="">Login</Link>
                <Link href="">Register</Link>
            </div>
        </div>
    );
}
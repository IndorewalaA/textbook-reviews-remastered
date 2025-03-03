"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { poppins_reg, poppins_bold } from './fonts';    
import { SearchBarSmall } from './Search';

export default function NavBar() {
    const pathname = usePathname()
    const isHome = pathname === "/"
    const isActive = (path: string) => {
        return pathname === path;   
    }

    const activeStyle: string = "text-brown-600 font-bold border-b-2 border-brown-600";

    return (
        <div className="flex flex-row justify-between p-8 tx-dark-brown">
            <Link 
                href="/"
                className={`text-2xl bg-gradient-to-r from-orange-600 to-blue-800 bg-clip-text text-transparent ${poppins_reg.className}`}>
                    RateYour<span className={poppins_bold.className}>Textbooks</span>
            </Link>
            {!isHome && (<SearchBarSmall/>)}
            <div className="space-x-4 text-lg">
                <Link
                    href="/catalog"
                    className={isActive("/catalog") ? activeStyle : "hover:text-brown-400 transition-colors"}
                >
                    Courses
                </Link>
                <Link
                    href="/login"
                    className={isActive("/login") ? activeStyle : "hover:text-brown-400 transition-colors"}
                >
                    Login
                </Link>
                <Link
                    href="/register"
                    className={isActive("/register") ? activeStyle : "hover:text-brown-400 transition-colors"}
                >
                    Register
                </Link>
            </div>
        </div>
    );
}
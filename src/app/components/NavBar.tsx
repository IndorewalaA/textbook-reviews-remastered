"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { poppins_reg, poppins_bold } from './fonts';    
import { SearchBarSmall } from './Search';
import { auth } from '../../../firebase';

export default function NavBar() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true); // Add loading state
    const pathname = usePathname()
    const isHome = pathname === "/"

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); // Set loading to false after checking auth state
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
    }

    const isActive = (path: string) => pathname === path;
    const activeStyle: string = "font-bold border-b-2";

    if (loading) {
        return <div style={{ height: '80px' }} />; // Maintain navbar height during loading
    }

    return (
        <div className="flex flex-row justify-between p-8 dark-brown">
            <Link 
                href="/"
                className={`text-2xl bg-gradient-to-r from-orange-600 to-blue-800 bg-clip-text text-transparent ${poppins_reg.className}`}>
                    RateYour<span className={poppins_bold.className}>Textbooks</span>
            </Link>
            {!isHome && (<SearchBarSmall/>)}
            <div className="space-x-4 text-lg">
                <Link
                    href="/courses"
                    className={isActive("/courses") ? activeStyle : "hover:text-orange-600 transition-colors"}
                >
                    Courses
                </Link>
                {user ? (
                    <>
                        <Link
                            href="/profile"
                            className={isActive("/profile") ? activeStyle : "hover:text-blue-600 transition-colors"}
                        >
                            Profile
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="hover:text-orange-600 transition-colors"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            href="/login"
                            className={isActive("/login") ? activeStyle : "hover:text-blue-800 transition-colors"}
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className={isActive("/register") ? activeStyle : "hover:text-orange-600 transition-colors"}
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}

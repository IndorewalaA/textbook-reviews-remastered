"use client";
import NavBar from "../components/NavBar";
import { poppins_bold, poppins_reg, nunito_reg } from "../components/fonts";
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from "next/navigation";
import { auth } from "@/../../firebase";

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Sign in successful!!');
            router.push("/");
        }
        catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <main className={`h-screen flex flex-col ${nunito_reg.className}`}>
            <NavBar />
            <div className="flex flex-col items-center justify-center flex-grow dark-brown border-4 bg-[#DFD3C3] mx-120 my-20 rounded-xl">
                    <h2 className={`text-2xl font-bold mb-4 ${poppins_bold.className}`}>Enter Email and Password</h2>
                    <form onSubmit={handleLogin} className="flex flex-col space-y-4 w-96">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            className="p-2 px-4 border-2 dark-brown bg-orange-50 border-[#4A2219] rounded-full"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            className="p-2 px-4 border-2 dark-brown bg-orange-50 border-[#4A2219] rounded-full"
                        />
                        <button type="submit" className="p-2 border bg-[#4A2219] rounded-xl font-semibold text-lg text-white">
                            Login
                        </button>
                    </form>
                    {error && (
                        <p className="mt-2 text-red-600 border border-red-600 p-2 rounded bg-red-100">
                            {error}
                        </p>
                    )}
            </div>
        </main>
    );
};

export default Login;
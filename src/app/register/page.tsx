"use client";
import NavBar from "../components/NavBar";
import { poppins_bold, poppins_reg, nunito_reg } from "../components/fonts";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from "next/navigation";
import { auth } from "@/../../firebase"; // Adjust the path as needed

const SignUp = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter(); // Moved outside the function

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic password validation
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up: ', userCredential.user);
            router.push("/"); // Redirect on success
        } catch(err: any) {
            setError(err.message);
        }
    };

    return (
        <main className={`h-screen flex flex-col ${nunito_reg}`}>
            <NavBar />
            <div className="flex flex-col items-center justify-center flex-grow tx-dark-brown">
                <h2 className={`text-2xl font-bold mb-4 ${poppins_bold.className}`}>Create an Account</h2>
                <form onSubmit={handleSignUp} className="flex flex-col space-y-4 w-96">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="p-2 px-4 border-1 tx-dark-brown bg-orange-50 border-[#4A2219] rounded-full"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="p-2 px-4 border-1 tx-dark-brown bg-orange-50 border-[#4A2219] rounded-full"
                    />
                    <button type="submit" className="p-2 border bg-[#4A2219] rounded font-semibold text-lg text-white">
                        Register
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

export default SignUp;

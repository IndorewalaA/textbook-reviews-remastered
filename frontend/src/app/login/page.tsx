"use client";
import NavBar from "../components/NavBar";
import { poppins_bold, poppins_reg, nunito_reg } from "../components/fonts";
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth';
import { useRouter } from "next/navigation";
import { auth } from "@/../../firebase";
import firebase from "firebase/compat/app";

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setMessage("");
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const response = await fetch("http://localhost:5000/api/users/login", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify({
                    firebaseID: user.uid,
                    email: user.email,
                }),
            });
            if(!response.ok) {
                throw new Error('User not registered in backend.');
            } 
            else {
                console.log('Sign in successful!!');
            }
            router.push("/");
        }
        catch (error: any) {
            console.error("Login Error: ", error);
            setError(error.message);
        }
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        if (!email) {
            setMessage("Enter your email to reset your password.");
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Reset link sent! Check your inbox.");
        } catch (error: any) {
            setMessage(error.message);
        }
    }

    return (
        <main className={`h-screen flex flex-col ${nunito_reg.className}`}>
            <NavBar />
            <div className="flex flex-col items-center justify-center flex-grow dark-brown border-4 bg-[#DFD3C3] mx-120 my-20 rounded-xl">
                <h2 className={`text-2xl font-bold mt-24 mb-4 ${poppins_bold.className}`}>Enter Email and Password</h2>
                <form onSubmit={handleLogin} className="flex flex-col space-y-4 w-96">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="p-2 px-4 border-2 dark-brown bg-orange-50 border-[#D0B8A8] rounded-full"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="p-2 px-4 border-2 dark-brown bg-orange-50 border-[#D0B8A8] rounded-full"
                    />
                    <button type="submit" className="p-2 border bg-[#4A2219] rounded-xl font-semibold text-lg text-white cursor-pointer">
                        Login
                    </button>
                </form>
                <button
                    onClick={handleResetPassword}
                    className="hover:underline cursor-pointer">
                    Reset Password
                </button>
                <p className={`mt-2 text-red-600 border border-red-600 p-2 rounded bg-red-100 transition-opacity ${
                        error ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                >
                    {error || "Placeholder text"}
                </p>
                <p className={`mt-2 text-green-600 border border-green-600 p-2 rounded bg-green-100 transition-opacity ${message ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    {message || "Placeholder text"}
                </p>
            </div>
        </main>
    );
};

export default Login;
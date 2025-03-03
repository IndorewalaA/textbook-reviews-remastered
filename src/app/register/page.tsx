"use client";
import NavBar from "../components/NavBar";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { Sign } from "crypto";

const SignUp = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up: ', userCredential.user);
            alert('Sign up successful!');
        } catch(err: any) {
            setError(err.message);
        }
    };

    return (
        <main className="h-screen flex flex-col">
            <NavBar/>
            <div>
                <h2>Register</h2>
                <form onSubmit={handleSignUp}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) =>setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Register</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </main>
    );
};

export default SignUp;
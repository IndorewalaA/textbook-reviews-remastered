import '../globals.css';
import '../components/NavBar';
import NavBar from '../components/NavBar';
import { useState } from 'react';

export default function Page() {
    return(
        <main className="h-screen flex flex-col">
            <NavBar/>    
        </main>
    );
}
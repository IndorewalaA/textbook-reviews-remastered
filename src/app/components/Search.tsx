"use client";
import { useState, ChangeEvent, FormEvent } from 'react';

const SearchBarSmall = () => {
    const [query, setQuery] = useState('');
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Add search functionality here later.
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search ISBN, Book Title, Author..."
                className="p-2 px-4 rounded-full bg-orange-50 text-gray border-2 border-[#D0B8A8] 
                    w-48 sm:w-60 md:w-md lg:w-lg text-md transition-all"
            />
            <button
                type="submit"
                className="p-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
            >
                Search
            </button>
        </form>
    );
};


const SearchBarLarge = () => {
    const [query, setQuery] = useState('')
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Add search functionality here later
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search ISBN, Book Title, Author..."
                className="p-4 px-8 rounded-full bg-orange-50 text-gray border-3 border-[#D0B8A8] w-xl text-lg"
            />
            <button
                type="submit"
                className="p-5 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
            >
                Search
            </button>
        </form>
    );
}

export {SearchBarSmall, SearchBarLarge};
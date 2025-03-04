"use client";
import { useState, ChangeEvent } from 'react';

const SearchBarSmall = () => {
    const [query, setQuery] = useState('')
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    };
    return (
        <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search ISBN, Book Title, Author..."
            className="p-2 px-8 rounded-full bg-orange-50 text-gray border-1 w-lg text-md"
        />
    );
};

const SearchBarLarge = () => {
    const [query, setQuery] = useState('')
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    };
    return (
        <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search ISBN, Book Title, Author..."
            className="p-4 px-8 rounded-full bg-orange-50 text-gray border-2 w-xl text-lg"
        />
    );
}

export {SearchBarSmall, SearchBarLarge};
import { useState } from 'react';
import { ChangeEvent } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('')
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    };

    return (
        <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="p-2 rounded bg-gray-700 text-white"
        />
    );
};
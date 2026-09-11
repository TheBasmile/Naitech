import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from './Icons';

export default function SearchBar({ initialValue = '', className = '', autoFocus = false }) {
  const [value, setValue] = useState(initialValue);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (value.trim()) params.set('q', value.trim());
    navigate(`/products?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`} role="search">
      <label htmlFor="site-search" className="sr-only">
        ابحث عن منتج
      </label>
      <SearchIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
      <input
        id="site-search"
        type="search"
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => setValue(e.target.value)}
        placeholder="ابحث عن سماعات، ساعات، شواحن..."
        className="input-field pr-9 text-sm"
      />
    </form>
  );
}

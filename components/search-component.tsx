'use client';

import { Input } from '@material-tailwind/react';

export default function SearchComponent({ searchInput, setSearchInput }) {
  return (
    <Input
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      placeholder="Search Images"
      label="Search Images"
      icon={<i className="fas fa-search" />}
    />
  );
}

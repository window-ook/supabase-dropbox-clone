'use client';

import { useState } from 'react';
import Logo from 'components/logo';
import SearchComponent from 'components/search-component';
import FileDragnDropZone from 'components/file-dragndropzone';
import DropboxImageList from 'components/dropbox-image-list';

export default function UI() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <main className="w-full p-2 flex flex-col gap-4">
      <Logo />
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <FileDragnDropZone />
      <DropboxImageList searchInput={searchInput} />
    </main>
  );
}

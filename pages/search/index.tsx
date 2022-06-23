import { useRouter } from 'next/router';
import React from 'react';
import SearchResults from '../../components/SearchResults/SearchResults';

const Search = () => {
  const router = useRouter();
  const { keyword } = router.query;

  return (
    <div>
      {keyword}
      <SearchResults />
    </div>
  );
};

export default Search;

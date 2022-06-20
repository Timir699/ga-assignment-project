import { useRouter } from 'next/router';
import React from 'react';

const Search = () => {
  const router = useRouter();
  const { keyword } = router.query;

  return <div>{keyword}</div>;
};

export default Search;

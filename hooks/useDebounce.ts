import { useState, useEffect } from 'react';

export default function useDebounce(delay: number = 500) {
  const [searchQuery, setSearchQuery] = useState<any>(null);
  const [debouncedValue, setDebouncedValue] = useState(searchQuery);

  let handler: any = null;
  useEffect(() => {
    handler = setTimeout(() => {
      setDebouncedValue(searchQuery);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const clearDebounce = () => clearTimeout(handler);

  return { debouncedValue, clearDebounce, setSearchQuery };
}

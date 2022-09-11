import { useEffect, useState } from 'react';

function useLocalStorage(initialState, key) {
  function get() {
    if (typeof window !== 'undefined') {
      const storage = localStorage.getItem(key);

      if (storage) {
        return JSON.parse(storage).value;
      }
    }

    return initialState;
  }

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;

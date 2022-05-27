import { useMemo } from "react";

/**
 * hook for getting value from the local storage
 */
const useLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  const data = useMemo(() => {
    return value;
  }, [value]);

  return {
    data,
  };
};

export default useLocalStorage;

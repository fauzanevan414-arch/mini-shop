import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [nilai, setNilai] = useState(() => {
    const tersimpan = localStorage.getItem(key);
    return tersimpan ? JSON.parse(tersimpan) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(nilai));
  }, [key, nilai]);

  return [nilai, setNilai];
}
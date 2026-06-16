import { useEffect, useState } from "react";

const EVT = "dprime:store-change";

export function useLocalStore<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initial;
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    const sync = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== key) return;
      try {
        const raw = window.localStorage.getItem(key);
        setValue(raw ? (JSON.parse(raw) as T) : initial);
      } catch {
        /* ignore */
      }
    };
    window.addEventListener(EVT, sync as EventListener);
    return () => window.removeEventListener(EVT, sync as EventListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update = (next: T | ((prev: T) => T)) => {
    setValue((prev) => {
      const resolved = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
      try {
        window.localStorage.setItem(key, JSON.stringify(resolved));
        window.dispatchEvent(new CustomEvent(EVT, { detail: key }));
      } catch {
        /* ignore quota */
      }
      return resolved;
    });
  };

  return [value, update] as const;
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

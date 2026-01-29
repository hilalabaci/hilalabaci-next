'use client';

import { useEffect, useMemo, useState } from 'react';

const useOnScreen = <T extends HTMLElement>(ref: React.RefObject<T | null>) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const canObserve = useMemo(
    () => typeof window !== 'undefined' && 'IntersectionObserver' in window,
    [],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || !canObserve) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, canObserve]);

  return canObserve ? isOnScreen : true;
};

export default useOnScreen;

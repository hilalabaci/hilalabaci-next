'use client';
import { useEffect, useRef } from 'react';
import { useNavContext } from './NavContext';
import useOnScreen from '@/app/_hooks/useOnScreen';

const useNav = <T extends HTMLElement = HTMLElement>(activeLinkId: string) => {
  const ref = useRef<T>(null);
  const { activeLinkId: currentActive, setActiveLinkId } = useNavContext();

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveLinkId(activeLinkId);
    }
  }, [isOnScreen, activeLinkId, setActiveLinkId]);

  return ref;
};

export default useNav;

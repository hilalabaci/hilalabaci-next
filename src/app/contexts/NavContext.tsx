"use client";
import React, { createContext, useContext, useMemo, useState } from "react";

type NavContextValue = {
  activeLinkId: string;
  setActiveLinkId: (id: string) => void;
};
const NavContext = createContext<NavContextValue | null>(null);

export default function NavProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeLinkId, setActiveLinkId] = useState("Start");

  const value = useMemo(
    () => ({ activeLinkId, setActiveLinkId }),
    [activeLinkId]
  );

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}
export function useNavContext() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNavContext must be used within NavProvider");
  return ctx;
}

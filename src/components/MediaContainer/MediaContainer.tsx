'use client'
import React, { ReactNode, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const useDesktopMediaQuery = () =>
  useMediaQuery({ query: "(min-width: 1200px)" });

const useTabletAndBelowMediaQuery = () =>
  useMediaQuery({ query: "(max-width: 1200px)" });
const useMobileMediaQuery = () =>
  useMediaQuery({ query: "(max-width: 440px)" });

interface DesktopProps {
  children: ReactNode;
}

const DesktopContainer: React.FC<DesktopProps> = ({ children }) => {
  const [pcDevice, setPcDevice] = useState<Boolean | undefined>(undefined);
  const isDesktop = useDesktopMediaQuery();

  useEffect(() => {
    if (isDesktop) {
      setPcDevice(true);
    } else {
      setPcDevice(false);
    }
  }, [isDesktop]);

  return pcDevice ? children : null;
};

interface TabletAndBelowProps {
  children: ReactNode;
}
const TabletAndBelowContainer = ({ children }: TabletAndBelowProps) => {
  const [mobileDevice, setMobileDevice] = useState<Boolean | undefined>(
    undefined
  );
  const isTabletAndBelow = useTabletAndBelowMediaQuery();
  useEffect(() => {
    if (isTabletAndBelow) {
      setMobileDevice(true);
    } else {
      setMobileDevice(false);
    }
  }, [isTabletAndBelow]);
  return mobileDevice ? children : null;
};
interface MobileOnlyProps {
  children: ReactNode;
}
const MobileOnlyContainer = ({ children }: MobileOnlyProps) => {
  const [mobileDevice, setMobileDevice] = useState<Boolean | undefined>(
    undefined
  );
  const isTabletAndBelow = useMobileMediaQuery();
  useEffect(() => {
    if (isTabletAndBelow) {
      setMobileDevice(true);
    } else {
      setMobileDevice(false);
    }
  }, [isTabletAndBelow]);
  return mobileDevice ? children : null;
};

export { DesktopContainer, TabletAndBelowContainer, MobileOnlyContainer };

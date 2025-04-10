"use client";

import { useEffect, useState } from "react";

// Ant Design breakpoints
export const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

type Breakpoint = keyof typeof breakpoints;

export interface ResponsiveInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  currentBreakpoint: Breakpoint;
}

export const useResponsive = (): ResponsiveInfo => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mevcut breakpoint'i belirle
  const getCurrentBreakpoint = (): Breakpoint => {
    if (windowWidth < breakpoints.xs) return "xs";
    if (windowWidth < breakpoints.sm) return "sm";
    if (windowWidth < breakpoints.md) return "md";
    if (windowWidth < breakpoints.lg) return "lg";
    if (windowWidth < breakpoints.xl) return "xl";
    return "xxl";
  };

  const currentBreakpoint = getCurrentBreakpoint();

  return {
    isMobile: windowWidth < breakpoints.md,
    isTablet: windowWidth >= breakpoints.md && windowWidth < breakpoints.lg,
    isDesktop: windowWidth >= breakpoints.lg,
    currentBreakpoint,
  };
};

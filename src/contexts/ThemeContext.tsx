'use client';

import React, { createContext, useContext, useEffect, useCallback, useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Module-level state for theme
let currentTheme: Theme = 'dark';
const listeners = new Set<() => void>();

function getThemeSnapshot(): Theme {
  return currentTheme;
}

function getServerThemeSnapshot(): Theme {
  return 'dark';
}

function subscribeToTheme(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function updateTheme(newTheme: Theme): void {
  currentTheme = newTheme;
  listeners.forEach((listener) => listener());
}

// Initialize from localStorage if available (runs once on module load)
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('theme') as Theme | null;
  if (saved === 'light' || saved === 'dark') {
    currentTheme = saved;
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    updateTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    updateTheme(newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}


import "./src/styles/global.css"
import "/src/styles/variables.module.css"
import React from 'react';
import { useTheme } from './src/hooks/useTheme';

export const wrapRootElement = ({ element }) => {
  const ThemeWrapper = () => {
    const { theme } = useTheme();
    return element;
  };
  return <ThemeWrapper />;
};
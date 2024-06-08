import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    lightTheme: () => { },
    darkTheme: () => { },
})

export const ThemeProvider = ThemeContext.Provider

export function useThemeSwither() {
    return useContext(ThemeContext)
}
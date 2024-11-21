import { useContext, createContext,React } from "react";

export const ThemeContext = createContext({
    themeMode:'light',
    lightMode:()=>{},
    darkMode:()=>{}
});
export const ThemeContextProvider=ThemeContext.Provider;
export function useTheme(){
    return useContext(ThemeContext);
}
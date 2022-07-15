import React from "react";
import Themes from "../components/Themes";

export default React.createContext({
    theme: Themes.light,
    toggleTheme: () => {
    }
});
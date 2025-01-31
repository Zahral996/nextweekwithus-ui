import React, { createContext, useContext, ReactNode } from 'react';

type LocaleContextType = {
    locale: string;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children, locale }: { children: ReactNode; locale: string }) => {
    return (
        <LocaleContext.Provider value={{ locale }}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error("useLocale must be used within a LocaleProvider");
    }
    return context;
};
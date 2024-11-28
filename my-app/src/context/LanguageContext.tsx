import React, { createContext, useContext, useState } from "react";

interface LanguageContextValues {
  language: string;
}

export const LanguageContext = createContext<LanguageContextValues>({ language: "hr" });

export default function LanguageProvider({ children }: React.PropsWithChildren) {
  const [language, setLanguage] = useState("hr");
  return <LanguageContext.Provider value={{ language }}>{children}</LanguageContext.Provider>;
}

//hook
export function useLanguageContext() {
  const context = useContext(LanguageContext);
  return context;
}

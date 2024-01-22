import { createContext, useContext } from "react";
import { defaultConfig, config } from "./defaults/config";

interface ConfigProps {}
const ConfigContext = createContext({});

export default function Config({ children }: PropsWithChildren<ConfigProps>) {
  return (
    <ConfigContext.Provider value={defaultConfig}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig(): config {
  return useContext(ConfigContext) as config;
}

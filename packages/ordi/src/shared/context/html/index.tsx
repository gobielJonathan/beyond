import { createContext, useContext } from "react";
import type { PropsWithChildren } from "react";
import type { HelmetData } from "react-helmet-async";
import type { ChunkExtractor } from "@loadable/server";

export type HtmlContextType = {
  helmet: HelmetData["context"]["helmet"];
  extractor: ChunkExtractor;
  html: string;
  routerProps: Record<string, unknown>;
  fetchProps: Record<string, unknown>;
};

export const HtmlContext = createContext<HtmlContextType | undefined>(
  undefined
);

export const HtmlProvider = (props: PropsWithChildren<HtmlContextType>) => {
  return (
    <HtmlContext.Provider value={props}>{props.children}</HtmlContext.Provider>
  );
};

export const useHtmlContext = () => {
  const context = useContext(HtmlContext);
  if (context === undefined)
    throw Error("using useHtmlContext must under HtmlProvider");
  return context;
};

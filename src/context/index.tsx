import React, {
  useState,
  ReactChild,
  createContext,
  FunctionComponent,
} from "react";
export const PageContext = createContext({});

interface Props {
  children: ReactChild;
}
const PageContextProvider: FunctionComponent<Props> = ({ children }) => {
  return (
    <PageContext.Provider
      value={{
        user: '',
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
export default PageContextProvider;

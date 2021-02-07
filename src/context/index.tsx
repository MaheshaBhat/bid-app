import React, {
  useState,
  ReactChild,
  createContext,
  FunctionComponent,
  ReactPropTypes,
} from "react";
export const PageContext = createContext({});

interface Props {
  children: ReactChild;
}
const PageContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [user, setUser] = useState({
  });
  return (
    <PageContext.Provider
      value={{
        user: user,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
export default PageContextProvider;

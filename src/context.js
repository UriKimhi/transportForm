import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [department, setDepartment] = useState("");
  const [isExist, setIsExist] = useState(false);

  const values = {
    department,
    setDepartment,
    isExist,
    setIsExist,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContextProvider, useUserContext };

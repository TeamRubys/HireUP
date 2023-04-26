import { createContext } from "react";

type UserContextType = {
  username: string;
  setUserName: React.Dispatch<React.SetStateAction<string>;
}

const UserContext = createContext<UserContextType>({
  username: "",
  setUserName: () => {}
});

export default UserContext;

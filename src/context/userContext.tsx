/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../services/connectionSupabase";

interface userProviderProps {
  children: React.ReactNode;
}
interface userProps {
  id: string;
  name: string;
  email: string;
}

type usercontextData = {
  user: userProps | null;
  handleInfoUser: ({ id, name, email }: userProps) => void;
};

export const userContext = createContext({} as usercontextData);

function UserProvider({ children }: userProviderProps) {
  const [user, setUser] = useState<userProps | null>(null);
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        const userData: userProps = {
          id: session.user.id,
          email: session.user.email || "",
          name: session.user.user_metadata.displa_name || "Usuário Anônimo",
        };
        setUser(userData);
      } else {
        setUser(null);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  function handleInfoUser({ id, name, email }: userProps) {
    setUser({
      id,
      name,
      email,
    });
  }

  return (
    <userContext.Provider value={{ user, handleInfoUser }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;

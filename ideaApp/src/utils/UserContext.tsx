import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  userlogin: (userData: User) => void;
  userlogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const userlogin = (userData: User) => {
    setUser(userData);
  };

  const userlogout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, userlogin, userlogout }}>
      {children}
    </AuthContext.Provider>
  );
};

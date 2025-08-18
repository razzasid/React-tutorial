import { createContext, useState, useContext } from "react";

// App context and provider
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    // email: "",
  });

  const [editingRowId, setEditingRowId] = useState(false);

  const value = {
    expense,
    setExpense,
    editingRowId,
    setEditingRowId,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Hook for consuming the context
export default function useAppContext() {
  return useContext(AppContext);
}

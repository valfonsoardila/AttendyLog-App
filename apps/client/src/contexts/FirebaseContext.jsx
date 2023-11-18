import { createContext, useContext } from "react";
import Firebase from "../firebase/Config"; // Asegúrate de importar Firebase

// Crea el contexto de Firebase
const FirebaseContext = createContext();

// Hook para acceder al contexto de Firebase
export function useFirebase() {
  return useContext(FirebaseContext);
}

// Proveedor de contexto de Firebase
export function FirebaseProvider({ children }) {
  return <FirebaseContext.Provider value={Firebase}>{children}</FirebaseContext.Provider>;
}

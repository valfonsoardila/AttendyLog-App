import './App.css'
import { FirebaseProvider } from "./contexts/FirebaseContext"
import { BrowserRouter as Router } from "react-router-dom"
import BaseRoutes from "./routes/BaseRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <FirebaseProvider>
          <BaseRoutes />
        </FirebaseProvider>
      </Router>
    </div>
  )
}

export default App

import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import BaseRoutes from "./routes/BaseRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <BaseRoutes />
      </Router>
    </div>
  )
}

export default App

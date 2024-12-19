import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import global styles here
import GlobalStyles from "./styles/GlobalStyles"

// import pages here
import HomePage from "./pages/HomePage"
import CreateQuiz from "./pages/CreateQuiz"

function App() {

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/create" element={ <CreateQuiz /> } />
      </Routes>
    </Router>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import global styles here
import GlobalStyles from "./styles/GlobalStyles"

// import pages here
import HomePage from "./pages/HomePage"
import CreateQuiz from "./pages/CreateQuiz"
import Testing from "./pages/Testing"
import Create from "./pages/Create"

function App() {

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/create-quiz" element={ <CreateQuiz /> } />
        {/* Test pages and/or components below */}
        <Route path="/test" element={ <Testing /> } />
        <Route path="/create" element={ <Create /> } />
      </Routes>
    </Router>
  )
}

export default App
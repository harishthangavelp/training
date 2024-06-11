import React from 'react'
import{
BrowserRouter as Router,Routes,Route
} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Contact from './components/Contact'
import PersonalDetails from './components/PersonalDetails'

function App() {
  return (
    <Router>
        <div>
         <Navigation/>
         <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/personaldetails" element={<PersonalDetails/>}></Route>
          {/* <Route path="/navigation" element={<Navigation/>}></Route> */}
         </Routes>
        </div>
    </Router>
  )
}

export default App
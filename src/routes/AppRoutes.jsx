import { Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import TheExperience from "../pages/TheExperience"
import Schedule from "../pages/Schedule"
import Speakers from "../pages/Speakers"
import Tickets from "../pages/tickets"
import ContactUs from "../pages/ContactUs"
import RegisterNow from "../pages/registernow"
import Confirmation from "../pages/Confirmation"

const AppRoutes = () => {
 return(
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/the-experience" element={<TheExperience/>} />
    <Route path="/schedule" element={<Schedule/>} />
    <Route path="/speakers" element={<Speakers/>} />
    <Route path="/tickets"   element={<Tickets />} />
    <Route path="/contactus"  element={<ContactUs />} />
    <Route path="/registernow" element={<RegisterNow/>} />
    <Route path="/confirmation" element={<Confirmation/>}/>
  </Routes>
 )
}

export default AppRoutes
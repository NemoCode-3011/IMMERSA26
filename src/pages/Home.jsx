import NavBar from "../components/NavBar"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ExperienceSection from "../components/ExperienceSection"
import ScheduleSection from "../components/SchedulesSection"
import CountDownTimer from "../components/CountDownTimer"
import SpeakersSection from "../components/SpeakersSection"
import TicketsSection from "../components/TicketsSection"
import SponsorsSection from "../components/SponsorsSection"
import Footer from "../components/Footer"
import FAQSection from "../components/FAQSection"

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ExperienceSection />
      <AboutSection />
      <SpeakersSection />
      <ScheduleSection />
      <CountDownTimer />
      <TicketsSection />
      <SponsorsSection />
      <FAQSection />
      <Footer />

    </>
  )
}

export default Home 
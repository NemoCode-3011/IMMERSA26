import { useState, useEffect } from "react"

function AboutSection2() {
  const [speakers, setSpeakers] = useState(0)
  const [days, setDays] = useState(0)
  const [attendees, setAttendees] = useState(0)
  const [zones, setZones] = useState(0)

  useEffect(() => {
    const duration = 3000
    const steps = 60
    const interval = duration / steps

    const timer = setInterval(() => {
      setSpeakers(prev => prev < 10 ? prev + 1 : 10)
      setDays(prev => prev < 3 ? prev + 1 : 3)
      setAttendees(prev => prev < 500 ? prev + 10 : 500)
      setZones(prev => prev < 5 ? prev + 1 : 5)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="row down-10 xs-down-25 bottom-50">
        <div className="col-6 xs-12 xs-centered">
          <div className="container-80">
            <div><span className="white px34">About Us</span></div>
            <div className="row down-5 xs-down-5"><span className="white px60 xs-px55 w-gradient">This is where the future comes alive...</span></div>
            <div className="row down-7 xs-down-10"><span className="white">IMMERSA 2026 is more than an event - it's an EXPERIENCE. <div><span>A Space where gaming, creativity, and technology come together to create bigger than each on its own.</span></div></span></div>
            <div className="row down-3"><span className="white">In a world where designers, developers, and gamers often work in separate spaces, IMMERSA brings them together into one immersive experience. <div><span> A place to build, explore, connect and experience the future - not as an idea, but what could be.</span></div></span></div>
            <div className="row down-3"><span className="white">From interactive sessions and live demos to creative showcases and high energy experiences, IMMERSA is designed to push boundaries and spark new ideas.</span></div>
          </div>
        </div>
        <div className="col-6 xs-12 xs-down-5">
          <div className="bg-image-1 "></div>
        </div>
        <div className="row down-5 xs-down-5">
          <div className="container">
            <div className="col-3 xs-6 centered">
              <div className="row"><span className="w-gradient px100 xs-px100">{speakers}+</span><div className="row"><span className="white px24">World Class Speakers</span></div></div>
            </div>
            <div className="col-3 xs-6 centered">
              <div><span className="w-gradient px100 xs-px100">{days}</span><div className="row"><span className="white px24">Days of Experience</span></div></div>
            </div>
            <div className="col-3 xs-5 centered">
              <div><span className="w-gradient px100 xs-px100">{attendees}+</span><div className="row"><span className="white px24">Expected Attendees</span></div></div>
            </div>
            <div className="col-3 xs-6 xs-off-1  centered">
              <div><span className="w-gradient px100 xs-px100">{zones}</span><div className="row"><span className="white px24">Experience Zones</span></div></div>
            </div>
          </div>
        </div>
        <div className="row down-10 xs-down-15">
          <div className="container xs-container-99">
            <div className="col-5 centered xs-12">
              <div className="row centered"><span className="white px16">OUR MISSION</span></div>
              <div className="row down-3 xs-down-5">
                <div className="container glass-card">
                  <div><span className="white px18 italics">"To create a space where gaming, creativity, and technlogy collide- and where the next generation of founders, players, and dreamers find their people and discover their purpose"</span></div>
                </div>
              </div>
            </div>
            <div className="col-5 off-1 xs-12 xs-down-5 row centered">
              <div className="row centered"><span className="white px16">OUR VISION</span></div>
              <div className="row down-3 xs-down-5">
                <div className="container glass-card bottom-30">
                  <div><span className="white px18 italics">"A world where the lines between gaming, design, and technology no longer exists- just one unified creative force"</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row down-10 xs-down-15">
          <div className="container">
            <div className="col-8 off-2 centered">
              <div><span className="white px24 xs-px45">MEET THE TEAM</span></div>
            </div>
            <div className="row down-3 xs-down-10">
              <div className="col-3 xs-12">
                <div className="ab-card-1">
                  <div className="container-80 centered">
                    <div className="row down-100 xs-down-70"><span className="white px18">Alexis Monroe</span></div>
                    <div className="row down-3"><span className="white px14">Event Director, IMMERSA</span></div>
                  </div>
                </div>
              </div>
              <div className="col-3 xs-12">
                <div className="ab-card-2">
                  <div className="container-80 centered">
                    <div className="row down-100 xs-down-70"><span className="white px18">Jordan Okafor</span></div>
                    <div className="row down-3"><span className="white px14">Creative Lead, IMMERSA</span></div>
                  </div>
                </div>
              </div>
              <div className="col-3 xs-12">
                <div className="ab-card-3">
                  <div className="container-80 centered">
                    <div className="row down-100 xs-down-70"><span className="white px18">Priya Nair</span></div>
                    <div className="row down-3"><span className="white px14">Tech Director, IMMERSA</span></div>
                  </div>
                </div>
              </div>
              <div className="col-3 xs-12">
                <div className="ab-card-4">
                  <div className="container-80 centered">
                    <div className="row down-100 xs-down-70"><span className="white px18">Marcus Webb</span></div>
                    <div className="row down-3"><span className="white px14">Community Manager, IMMERSA</span></div>
                  </div>
                </div>
              </div>
              <div className="row down-2 xs-push-2 push-250">
                <div className="col-3 xs-12">
                  <div className="ab-card-5">
                    <div className="container-80 centered">
                      <div className="row down-100 xs-down-70"><span className="white px18">Samir Khalid</span></div>
                      <div className="row down-3"><span className="white px14">Partnerships & Sponsorships, IMMERSA</span></div>
                    </div>
                  </div>
                </div>
                <div className="col-3 xs-12">
                  <div className="ab-card-6">
                    <div className="container-80 centered">
                      <div className="row down-100 xs-down-70"><span className="white px18">Jamal Reeves</span></div>
                      <div className="row down-3"><span className="white px14">Media & Content Strategy, IMMERSA</span></div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-10">
                  <div className="row xs-push-35 push-190"><span className="white px24 italics">...Ready to to be part of it?</span></div>
                </div>
                <div className="row down-5 xs-down-10 xs-push-100 push-250">
                  <a href="/RegisterNow" className="glass-card curved-20 white">Secure Your Spot</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection2
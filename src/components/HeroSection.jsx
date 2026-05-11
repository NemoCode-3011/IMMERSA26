// import Marquee from "react-fast-marquee"
function HeroSection() {
  return (
    <>
      <div className="hero xs-hero xs-hero-video">
        <video autoPlay muted loop playsInline className="hero-video" src="./assets/video-11.mp4">
        </video>
        <div className="col-8 off-2 md-12 xs-12 centered hero-content">
          <div className="row down-20 xs-down-35 md-down-20"><span className="px110 xs-px45 white bold hero-title italics  ">IMMERSA 2026</span></div>
          <div className="row xs-down-5 "><span className="px24 white hero-subtitle xs-px20">Where Gaming Meets Creativity & Innovation</span></div>
          <div className="row down-2  xs-down-5"><span className="px14 white hero-date">May 1-3, New York City</span></div>
          {/* <div className="row down-3 xs-down-10">
            <a className=" down-10  hero-btn" href="/tickets">Register Now</a>
          </div> */}
        </div>
        <div className="row down-7 xs-down-15 glass-card-2">
          <div className="container-99 centered">
            <marquee behavior="scroll" direction="left">
              <div className="col-2 md-2 xs-4"><span>Gaming</span></div>
              <div className="col-2 md-2 xs-4"><span>Creativity</span></div>
              <div className="col-2 md-2 xs-4"><span>Innovation</span></div>
              <div className="col-2 md-2 xs-4"><span>Experience</span></div>
              <div className="col-2 md-2 xs-4"><span>Networking</span></div>
              <div className="col-2 md-2 xs-4"><span>Fun</span></div>
            </marquee>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
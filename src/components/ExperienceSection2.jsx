import CircleSmallIcon from 'mdi-react/CircleSmallIcon'
import ArrowDownIcon from 'mdi-react/ArrowDownIcon'
import { useRef } from 'react'
const ExperienceSection2 = () => {
const zonesRef = useRef(null)
const scrollToZones = () => {
  zonesRef .current.scrollIntoView({ behavior: 'smooth'})
}

  return (
    <>
      <div className="row xs-down-20 xs-bottom-200">
        <div className="bg-image-17 xs-bottom-50">
          <div className="dark-scarf">
            <div className="row down-10">
              <div className="col-10 off-1  centered">
                <div><span className="white px100 xs-px60 bold w-gradient italics">STEP INSIDE IMMERSA</span></div>
                <div className="row down-2 xs-down-3"><span className="white italics px45">Where Gaming, Creativity & Tech Collide</span></div>
                <div className="row down-5 xs-down-5 ">
                  <div className="col-4 off-4 centered">
                    <div><span className="white ex-btn" onClick={scrollToZones}>Explore The Experience</span></div>
                  </div>
                  <div className='row down-3 xs-down-5'><span><ArrowDownIcon className='bounce-arrow' /></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row down-h xs-down-5">
        <div ref={zonesRef}>
          <div className="bg-image-18 bottom-50 xs-bottom-200">
          <div className="dark-scarf">
            <div className="row down-2">
              <div className="container-88">
                <div className="col-4 xs-12">
                  <div className="row xs-centered"><span className="white px45">GAMING ARENA</span></div>
                  <div className="row down-2 xs-centered"><span className="white px24">Competitive. Fun. Unforgettable</span></div>
                  <div className="row down-2 hr-line-2 xs-down-2"></div>
                  <div className="row down-3 xs-down-3 xs-centered"><span className="white px24">What you'll find:</span></div>
                  <div className="row down-2 xs-down-3 xs-4"><span className='white'><CircleSmallIcon className='icon-12' />FPS Tournaments</span></div>
                  <div className="row down-2 xs-down-3 xs-4"><span className='white'><CircleSmallIcon className='icon-12' />Racing Simulators</span></div>
                  <div className="row down-2 xs-down-3 xs-4"><span className='white'><CircleSmallIcon className='icon-12' />Open-World Challenges</span></div>
                </div>
                <div className="col-6 off-2 xs-12">
                  <div className="row xs-down-10">
                    <div className="col-4 xs-4">
                      <div className="ex-card-1"></div>
                    </div>
                    <div className="col-4 xs-4">
                      <div className="ex-card-2"></div>
                    </div>
                    <div className="col-4 xs-4">
                      <div className="ex-card-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="row down-h xs-down-5 ">
        <div className="bg-image-19 bottom-50 xs-bottom-200">
          <div className="dark-scarf">
            <div className="row down-2 xs-down-2">
              <div className="container-88">
                <div className="col-4">
                  <div className="row xs-centered"><span className="white px45">CREATIVE LAB</span></div>
                  <div className="row down-2 xs-centered xs-down-2"><span className="white px24">Where ideas turn to experiences.</span></div>
                  <div className="row down-2 hr-line-2"></div>
                  <div className="row down-3 xs-down-3 xs-centered"><span className="white px24">What you'll find:</span></div>
                  <div className="row down-2 xs-4 xs-down-3"><span className='white'><CircleSmallIcon className='icon-12' />UI/UX Workshops</span></div>
                  <div className="row down-2 xs-4 xs-down-3"><span className='white'><CircleSmallIcon className='icon-12' />Design Challenges</span></div>
                  <div className="row down-2 xs-4 xs-down-3"><span className='white'><CircleSmallIcon className='icon-12' />Creative Tools Showcase</span></div>
                </div>
                <div className="col-6 off-2 xs-12">
                  <div className="row xs-down-10">
                    <div className="col-4 xs-4">
                      <div className="ex-card-4"></div>
                    </div>
                    <div className="col-4 xs-4">
                      <div className="ex-card-5"></div>
                    </div>
                    <div className="col-4 xs-4">
                      <div className="ex-card-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row down-h xs-down-5">
        <div className="bg-image-20 xs-bottom-200 bottom-50">
          <div className="dark-scarf">
            <div className="row down-2 xs-down-3">
              <div className="container-88">
                <div className="col-4">
                  <div className="row xs-centered"><span className="white px45">DEV SPACE</span></div>
                  <div className="row down-2 xs-down-3 xs-centered"><span className="white px24">Build. Break. Learn. Repeat</span></div>
                  <div className="row down-2 hr-line-2"></div>
                  <div className="row down-3 xs-down-3 xs-centered"><span className="white px24">What you'll find:</span></div>
                  <div className="row down-2 xs-4 xs-down-3 xs-centered"><span className='white'><CircleSmallIcon className='icon-12' />Live Coding Sessions</span></div>
                  <div className="row down-2 xs-4 xs-down-3"><span className='white'><CircleSmallIcon className='icon-12' />Hackathons</span></div>
                  <div className="row down-2 xs-4 xs-down-3"><span className='white'><CircleSmallIcon className='icon-12' />Tech Talks</span></div>
                </div>
                <div className="col-6 off-2 xs-12">
                  <div className="row xs-down-5">
                    <div className="col-4 xs-4">
                      <div className="ex-card-7"></div>
                    </div>
                    <div className="col-4 xs-4">
                      <div className="ex-card-8"></div>
                    </div>
                    <div className="col-4 xs-4">
                      <div className="ex-card-9"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row down-h xs-down-5">
        <div className="bg-image-21 xs-bottom-200 bottom-50">
          <div className="dark-scarf">
            <div className="row down-2 xs-down-3">
              <div className="container-88">
                <div className="col-4">
                  <div className="row xs-centered"><span className="white px45">THE IMMERSIVE ZONE</span></div>
                  <div className="row down-2 xs-centered"><span className="white px24">Experience The Future</span></div>
                  <div className="row down-2 hr-line-2"></div>
                  <div className="row down-3 xs-down-2 xs-centered"><span className="white px24">What you'll find:</span></div>
                  <div className="row down-2 xs-4 xs-centered xs-down-3"><span className='white'><CircleSmallIcon className='icon-12' />VR & AR Demos</span></div>
                  <div className="row down-2 xs-4 xs-centered xs-down-3"><span className='white'><CircleSmallIcon className='icon-12' />Interactive Tech Installations</span></div>
                  <div className="row down-2 xs-4 xs-centered xs-down-3"><span className='white'><CircleSmallIcon className='icon-12' />Next-Gen Hardware Showcase</span></div>
                </div>
                <div className="col-6 off-2 xs-12">
                  <div className="row xs-down-5">
                    <div className="col-4 xs-4">
                      <div className="ex-card-10"></div>
                    </div>
                    <div className="col-4 xs-4">
                      <div className="ex-card-11"></div>
                    </div>
                    <div className="col-4 xs-4">
                      <div className="ex-card-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row down-2 glass-card-2 xs-down-2">
        <div className="container xs-container-98 centered">
          <div className="col-4 xs-5 w-gradient">
            <div>
              <span className='white px32 xs-px24'>4</span>
              <span className='white px32 xs-px24'> Experience Zones</span>
            </div>
          </div>
          <div className="col-4 xs-3 xs-centered">
            <div>
              <span className='white px32 xs-px24'>20+</span>
              <span className='white px32 xs-px24'> Activities</span>
            </div>
          </div>
          <div className="col-4 xs-3 xs-off-1 w-gradient">
            <div>
              <span className='white px32 xs-px24'>3</span>
              <span className='white px32 xs-px24'> Days of Access</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row down-2">
        <div className="col-3 xs-6">
          <div className="ex-card-13"></div>
        </div>
        <div className="col-3 xs-6">
          <div className="ex-card-14"></div>
        </div>
        <div className="col-3 xs-6">
          <div className="ex-card-15"></div>
        </div>
        <div className="col-3 x-6">
          <div className="ex-card-16"></div>
        </div>
        <div className="col-4 xs-6">
          <div className="ex-card-20"></div>
        </div>
        <div className="col-2 xs-3">
          <div className="ex-card-17"></div>
        </div>
        <div className="col-2">
          <div className="ex-card-18"></div>
        </div>
        <div className="col-4">
          <div className="ex-card-19"></div>
        </div>
      </div>
      <div className="row xs-down-1 glass-card-2">
        <div className="col-6 off-3 centered">
          <div><span className="white w-gradient px32">READY TO EXPERIENCE IT?</span></div>
          <div className="col-4 off-4 xs-row xs-down-2">
            <a href="" className="white down-15 row pull-left-35 ex-btn">Secure Your Spot</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExperienceSection2
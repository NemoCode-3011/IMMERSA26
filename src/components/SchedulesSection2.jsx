import CalendarBlankOutlineIcon from 'mdi-react/CalendarBlankOutlineIcon';
import ClockOutlineIcon from 'mdi-react/ClockOutlineIcon'
import MapMarkerIcon from 'mdi-react/MapMarkerIcon'
import ArrowTopRightIcon from 'mdi-react/ArrowTopRightIcon'
import TrophyOutlineIcon from 'mdi-react/TrophyOutlineIcon'
import { useState } from 'react';
function ScheduleSection() {

  const [activeDay, setActiveDay] = useState(1)
  return (
    <>
      <div className="row down-10 xs-down-20 bottom-50">
        <div className="container">
          <div className="col-8 off-2">
            <div className="col-6 xs-12 xs-centered">
              <div><span className='px16 w-gradient xs-px32'>EVENT SCHEDULE</span></div>
              <div className='row down-2 xs-down-2'><span className='px32 xs-px20 white'>Browse All The Schedule</span></div>
            </div>
            <div className="col-6 xs-12">
              <div className="container xs-down-5">
                <div className={`col-3 off-1 xs-4`}>
                  <span onClick={() => setActiveDay(1)} className={`row down-40 white px14 ${activeDay === 1 ? 'btn-days-1' : 'btn-days'}`}>Day 01</span>
                </div>
                <div className={`col-3 off-1 xs-3 xs-off-1`}>
                  <span onClick={() => setActiveDay(2)} className={`row down-40 white px14 ${activeDay === 2 ? 'btn-days-1' : 'btn-days'}`}>Day 02</span>
                </div>
                <div className={`col-3 off-1 xs-3 xs-off-1`}>
                  <span onClick={() => setActiveDay(3)} className={`row down-40 white px14 ${activeDay === 3 ? 'btn-days-1' : 'btn-days'}`}>Day 03</span>
                </div>
              </div>
            </div>
          </div>
          {activeDay === 1 && (
            <div className="row down-3 xs-down-10">
            <div className="container">
              <div className="col-10 off-1 xs-12">
                <div className=" container c-1 bottom-10">
                  <div className="container-96">
                    <div className="col-4 xs-centered">
                      <div className='row'><span className='white px9 xs-px12'>By Vivian Fewry - Lead Game developer, Orbyte Interactive</span></div>
                      <div className="row down-3 xs-down-3"><span className='white px24 bold'>Opening Keynote: The Future Of Gaming</span></div>
                      <div className="row down-3 xs-down-3"><span className='white px14'>Discover the future of gaming, UI, and interactive storytelling</span></div>
                    </div>
                    <div className="col-3">
                      <div className="container">
                        <div className="container">
                          <div className="down-5 xs-down-10 bg-img-2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className='row down-20 centered'>
                        <span><ClockOutlineIcon className='icon-1' /></span>
                        <span className='white px11'>10:00 - 10:30 AM </span>
                        <div className='row'><span className='white px11'>01 May 2026</span></div>
                      </div>
                      <div className="row down-7 centered">
                        <span><MapMarkerIcon className='icon-1' /></span>
                        <span className='white px11'>Nexus Arena, Brooklyn, New York</span>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="container-80">
                        <a className='white row down-40 xs-down-5 btn-curved-3' href="">Buy Ticket<ArrowTopRightIcon className='icon-2' /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className=" container c-1 bottom-10">
                    <div className="container-96">
                      <div className="col-4 xs-centered">
                        <div className='row'><span className='white px9 xs-px12'>By Maya Singh- Lead Product Designer, CrayonDesigns</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px24 bold'>The Psychology of User Experience</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px14'>Explore how design and technology combine to create unforgettable user experiences</span></div>
                      </div>
                      <div className="col-3">
                        <div className="container">
                          <div className="container">
                            <div className="down-5 bg-img-3 xs-down-5"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className='row down-20 centered'>
                          <span><ClockOutlineIcon className='icon-1' /></span>
                          <span className='white px11'>10:45 - 11:00 AM </span>
                          <div className='row'><span className='white px11'>01 May 2026</span></div>
                        </div>
                        <div className="row down-7 centered">
                          <span><MapMarkerIcon className='icon-1' /></span>
                          <span className='white px11'>Javtis Center, Manhattan</span>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="container-80">
                          <a className='white row down-40 btn-curved-3 xs-down-5' href="">Buy Ticket <ArrowTopRightIcon className='icon-2' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className=" container c-1 bottom-10">
                    <div className="container-96">
                      <div className="col-4 xs-centered">
                        <div className='row'><span className='white px9 xs-px12'>By Tolu Adebayo- Senior Frontend Engineer</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px24 bold'>Code Meets Creativity</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px14'>Learn how developers and designers collaborate to build immersive products</span></div>
                      </div>
                      <div className="col-3">
                        <div className="container">
                          <div className="container">
                            <div className="down-5 xs-down-5 bg-img-4"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className='row down-20 centered'>
                          <span><ClockOutlineIcon className='icon-1' /></span>
                          <span className='white px11'>11:00 - 12:00 AM </span>
                          <div className='row'><span className='white px11'>01 May 2026</span></div>
                        </div>
                        <div className="row down-7 centered">
                          <span><MapMarkerIcon className='icon-1' /></span>
                          <span className='white px11'>Nexus Arena, Brooklyn, New York</span>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="container-80">
                          <a className='white row down-40 btn-curved-3 xs-down-5' href="">Buy Ticket <ArrowTopRightIcon className='icon-2' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className="container c-1 bottom-10">
                    <div className="container-96">
                      <div className='row centered down-2'><span className='white px24 xs-px-20'>Lunch Break & Networking</span></div>
                      <div className='row centered down-2'><span className='white px24 xs-px20'>01:00 PM - 02:00 PM</span></div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className=" container c-1 bottom-10">
                    <div className="container-96">
                      <div className="col-4 centered">
                        <div className='row'><span className='white px9 xs-px12'>By Leo Nakamura- Esports Strategist, Formula one</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px24 bold'>The Strategy Behind Winning Teams</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px14'>Learn what it takes to build, manage, and grow winning esports teams</span></div>
                      </div>
                      <div className="col-3">
                        <div className="container">
                          <div className="container">
                            <div className="down-5 xs-down-5 bg-img-5"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className='row down-20 centered'>
                          <span><ClockOutlineIcon className='icon-1' /></span>
                          <span className='white px11'>3:00 - 4:00 PM </span>
                          <div className='row'><span className='white px11'>01 May 2026</span></div>
                        </div>
                        <div className="row down-7 centered">
                          <span><MapMarkerIcon className='icon-1' /></span>
                          <span className='white px11'>The Innovation Loft, Chelsea</span>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="container-80">
                          <a className='white row down-40 btn-curved-3' href="">Buy Ticket <ArrowTopRightIcon className='icon-2' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className=" container c-1 bottom-10">
                    <div className="container-96">
                      <div className="col-4 xs-centered">
                        <div className='row'><span className='white px9 xs-px12'>By Jaden Cruz- Professional Consultant, Cruz ltd</span></div>
                        <div className="row down-3"><span className='white px24 bold'>Portfolio Review and Feedback Session</span></div>
                        <div className="row down-3"><span className='white px14'>A hands-on session designed to help creatives and developers refine their portfolios</span></div>
                      </div>
                      <div className="col-3">
                        <div className="container">
                          <div className="container">
                            <div className="down-5 xs-down-5 bg-img-6"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className='row down-20 centered'>
                          <span><ClockOutlineIcon className='icon-1' /></span>
                          <span className='white px11'>4:00 - 5:00 PM </span>
                          <div className='row'><span className='white px11'>01 May 2026</span></div>
                        </div>
                        <div className="row down-7 centered">
                          <span><MapMarkerIcon className='icon-1' /></span>
                          <span className='white px11'>Pier 36 Event Space</span>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="container-80">
                          <a className='white row down-40 xs-down-5 btn-curved-3' href="">Buy Ticket <ArrowTopRightIcon className='icon-2' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

          {activeDay === 2 && (
            <div className="row down-3 xs-down-10">
            <div className="container">
              <div className="col-10 off-1 xs-12">
                <div className=" container c-1 bottom-10">
                  <div className="container-96">
                    <div className="col-4 xs-centered">
                      <div className='row'><span className='white px9 xs-px12'>By Stephen Cross - Senior AI Engineer, Immersa Labs</span></div>
                      <div className="row down-3 xs-down-3"><span className='white px24 bold'>AI and the Future of Game Design</span></div>
                      <div className="row down-3 xs-down-3"><span className='white px14'>How artificial intelligence is reshaping the way games are built and experienced.</span></div>
                    </div>
                    <div className="col-3">
                      <div className="container">
                        <div className="container">
                          <div className="down-5 xs-down-10 bg-img-7"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className='row down-20 centered'>
                        <span><ClockOutlineIcon className='icon-1' /></span>
                        <span className='white px11'>10:00 - 10:30 AM </span>
                        <div className='row'><span className='white px11'>02 May 2026</span></div>
                      </div>
                      <div className="row down-7 centered">
                        <span><MapMarkerIcon className='icon-1' /></span>
                        <span className='white px11'>Nexus Arena, Brooklyn, New York</span>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="container-80">
                        <a className='white row down-40 xs-down-5 btn-curved-3' href="">Buy Ticket<ArrowTopRightIcon className='icon-2' /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className=" container c-1 bottom-10">
                    <div className="container-96">
                      <div className="col-4 xs-centered">
                        <div className='row'><span className='white px9 xs-px12'>By Andreas Mvrides- Creative Director, Riot Games</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px24 bold'>Designing Worlds: The Art of Creation</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px14'>A deep dive into the creative process behind building imersive visual experiences.</span></div>
                      </div>
                      <div className="col-3">
                        <div className="container">
                          <div className="container">
                            <div className="down-10 xs-down-10 bg-img-8"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className='row down-20 xs-down-3 centered'>
                          <span><ClockOutlineIcon className='icon-1' /></span>
                          <span className='white px11'>10:45 - 11:00 AM </span>
                          <div className='row'><span className='white px11'>02 May 2026</span></div>
                        </div>
                        <div className="row down-7 centered">
                          <span><MapMarkerIcon className='icon-1' /></span>
                          <span className='white px11'>Javtis Center, Manhattan</span>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="container-80">
                          <a className='white row down-40 xs-down-5 btn-curved-3' href="">Buy Ticket <ArrowTopRightIcon className='icon-2' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className=" container c-1 bottom-10">
                    <div className="container-96">
                      <div className="col-4 xs-centered">
                        <div className='row'><span className='white px9 xs-px12'>By Freen Armstrong- CEO, Orbyte Interactive</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px24 bold'>Building a Game Company From Zero </span></div>
                        <div className="row down-3 xs-down-3"><span className='white px14'>The truth about founding, funding, and scaling a game studio in today's market.</span></div>
                      </div>
                      <div className="col-3">
                        <div className="container">
                          <div className="container">
                            <div className="down-5 xs-down-5 bg-img-9"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className='row down-20 xs-down-3 centered'>
                          <span><ClockOutlineIcon className='icon-1' /></span>
                          <span className='white px11'>11:00 - 12:00 AM </span>
                          <div className='row'><span className='white px11'>02 May 2026</span></div>
                        </div>
                        <div className="row down-7 centered">
                          <span><MapMarkerIcon className='icon-1' /></span>
                          <span className='white px11'>The Innovation Loft, Chelsea</span>
                          
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="container-80">
                          <a className='white row down-40 xs-down-5 btn-curved-3' href="">Buy Ticket <ArrowTopRightIcon className='icon-2' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className="container c-1 bottom-10">
                    <div className="container-96">
                      <div className='row centered down-2'><span className='white px24 xs-px20'>Lunch Break & Networking</span></div>
                      <div className='row centered down-2'><span className='white px24 xs-px20'>01:00 PM - 02:00 PM</span></div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className=" container c-1 bottom-10">
                    <div className="container-96">
                      <div className="col-4 xs-centered">
                        <div className='row'><span className='white px9 xs-px12'>By TripleKai- Professional Esports Athlete, Team Nexus </span></div>
                        <div className="row down-3 xs-down-3"><span className='white px24 bold'>The Life of a Pro</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px14'>What It Takes To Compete at the Highest Level On The Grand Stage.</span></div>
                      </div>
                      <div className="col-3">
                        <div className="container">
                          <div className="container">
                            <div className="down-5 xs-down-5 bg-img-10"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className='row down-20 xs-down-3 centered'>
                          <span><ClockOutlineIcon className='icon-1' /></span>
                          <span className='white px11'>3:00 - 4:00 PM </span>
                          <div className='row'><span className='white px11'>02 May 2026</span></div>
                        </div>
                        <div className="row down-7 centered">
                          <span><MapMarkerIcon className='icon-1' /></span>
                          <span className='white px11'>Nexus Arena, Brooklyn, New York</span>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="container-80">
                          <a className='white row down-40 xs-down-5 btn-curved-3' href="">Buy Ticket <ArrowTopRightIcon className='icon-2' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className=" container c-1 bottom-10">
                    <div className="container-96">
                      <div className="col-4 xs-centered">
                        <div className='row'><span className='white px9 xs-px12'>By Zara Ellis- Gaming Content Creator & Streamer, ZaraPlays Media</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px24 bold'>From Stream to Empire</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px14'>Building a Brand Through Gaming</span></div>
                      </div>
                      <div className="col-3">
                        <div className="container">
                          <div className="container">
                            <div className="down-5 xs-down-5 bg-img-11"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className='row down-20 xs-down-3 centered'>
                          <span><ClockOutlineIcon className='icon-1' /></span>
                          <span className='white px11'>4:00 - 5:00 PM </span>
                          <div className='row'><span className='white px11'>02 May 2026</span></div>
                        </div>
                        <div className="row down-7 centered">
                          <span><MapMarkerIcon className='icon-1' /></span>
                          <span className='white px11'>Pier 36 Event Space</span>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="container-80">
                          <a className='white xs-down-5 row down-40 btn-curved-3' href="">Buy Ticket <ArrowTopRightIcon className='icon-2' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
          
          {activeDay === 3 && (
            <div className="row down-3 xs-down-10">
            <div className="container">
              <div className="col-10 off-1">
                <div className=" container c-1 bottom-10">
                  <div className="container-96">
                    <div className="col-4 xs-centered">
                      <div className='row'><span className='white px9 xs-px12'>By Triple Kai - Professional Esport Athlete, Team Nexus</span></div>
                      <div className="row down-3 xs-down-3"><span className='white px24 bold'>The Grand Esports Showdown - Opening Ceremony</span></div>
                      
                    </div>
                    <div className="col-3">
                      <div className="container">
                        <div className="container">
                          <div className="down-5 xs-down-5 bg-img-12"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className='row down-20 xs-down-3 centered'>
                        <span><ClockOutlineIcon className='icon-1' /></span>
                        <span className='white px11'>10:00 - 12:00 PM </span>
                        <div className='row'><span className='white px11'>03 May 2026</span></div>
                      </div>
                      <div className="row down-7 centered">
                        <span><MapMarkerIcon className='icon-1' /></span>
                        <span className='white px11'>Nexus Arena, Brooklyn, New York</span>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="container-80">
                        <a className='white row xs-down-5 down-40 btn-curved-3' href="">Buy Ticket<ArrowTopRightIcon className='icon-2' /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className=" container c-1 bottom-10">
                    <div className="container-96">
                      <div className="col-4 xs-centered">
                        <div className='row'><span className='white px9 xs-px12'>Sponsored by Google & Redbull</span></div>
                        <div className="row down-5 xs-down-5"><span className='white px24 bold'>Build It: The Immersa Hackathon</span></div>
                        <div className="row down-5 xs-down-5"><span className='white px14'>Build a game concept, prototype or interactive website/experience in 4 hours</span></div>
                      </div>
                      <div className="col-3">
                        <div className="container">
                          <div className="container">
                            <div className="down-20 xs-down-10 bg-img-13"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className='row down-20 xs-down-3 centered'>
                          <span><ClockOutlineIcon className='icon-1' /></span>
                          <span className='white px11'>12:30 - 4:30 PM </span>
                          <div className='row'><span className='white px11'>03 May 2026</span></div>
                        </div>
                        <div className="row down-7 centered">
                          <span><MapMarkerIcon className='icon-1' /></span>
                          <span className='white px11'>Javtis Center, Manhattan</span>
                        </div>
                        <div className="row down-7 push-10 centered">
                          <span><TrophyOutlineIcon className='icon-1' /></span>
                          <span className='white px11 '>Prize: $3000 cash + Immersa Pitch Award + Featured showcase on Immersa's social platforms</span>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="container-80">
                          <a className='white row down-40 xs-down-10 btn-curved-3' href="">Buy Ticket <ArrowTopRightIcon className='icon-2' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className=" container c-1 bottom-10">
                    <div className="container-96">
                      <div className="col-4 xs-centered">
                        <div className='row'><span className='white px9 xs-px12'>Sponsored by Immersa Labs & Sony Playstation</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px24 bold'>Pitch The Game - Concepts, Stories & Ideas </span></div>
                        <div className="row down-3 xs-down-3"><span className='white px14'>Open competition - attendees pitch original game concepts or technology to a live panel of Judges. </span></div>
                      </div>
                      <div className="col-3">
                        <div className="container">
                          <div className="container">
                            <div className="down-15 xs-down-10 bg-img-14"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className='row down-20 xs-down-3 centered'>
                          <span><ClockOutlineIcon className='icon-1' /></span>
                          <span className='white px11'>4:30 - 5:30 PM </span>
                          <div className='row'><span className='white px11'>03 May 2026</span></div>
                        </div>
                        <div className="row down-7 centered">
                          <span><MapMarkerIcon className='icon-1' /></span>
                          <span className='white px11'>The Innovation Loft, Chelsea</span>
                        </div>
                        <div className="row down-7 push-10 centered">
                          <span><TrophyOutlineIcon className='icon-1' /></span>
                          <span className='white px11 '>Prize: $1000 cash + Immersa Pitch Award + Meeting with CEO, Sony</span>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="container-80">
                          <a className='white row xs-down-5 down-40 btn-curved-3' href="">Buy Ticket <ArrowTopRightIcon className='icon-2' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className="container c-1 bottom-10">
                    <div className="container-96">
                      <div className='row centered down-2'><span className='white px24 xs-px20'>Lunch Break & Networking</span></div>
                      <div className='row centered down-2'><span className='white px24 xs-px20'>02:30 PM - 03:00 PM</span></div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className=" container c-1 bottom-10">
                    <div className="container-96">
                      <div className="col-4 xs-centered">
                        <div className='row'><span className='white px9 xs-px12'>Sponsored by Orbyte Interactive</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px24 bold'>Indie Game Design Challenge - Build in 3Hours</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px14'>Open Competition</span></div>
                      </div>
                      <div className="col-3">
                        <div className="container">
                          <div className="container">
                            <div className="down-10 xs-down-5 bg-img-15"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className='row down-20 xs-down-3 centered'>
                          <span><ClockOutlineIcon className='icon-1' /></span>
                          <span className='white px11'>5:30 - 8:00 PM </span>
                          <div className='row'><span className='white px11'>03 May 2026</span></div>
                        </div>
                        <div className="row down-7 centered">
                          <span><MapMarkerIcon className='icon-1' /></span>
                          <span className='white px11'>Nexus Arena, Brooklyn, New York</span>
                        </div>
                        <div className="row down-7 push-10 centered">
                          <span><TrophyOutlineIcon className='icon-1' /></span>
                          <span className='white px11 '>Prize: $2000 cash + Immersa Innovation Award + Game featured in Immersa's official gallery</span>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="container-80">
                          <a className='white row down-40 xs-down-5 btn-curved-3' href="">Buy Ticket <ArrowTopRightIcon className='icon-2' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row down-3 xs-down-5">
                  <div className=" container c-1 bottom-10">
                    <div className="container-96">
                      <div className="col-4 xs-centered">
                        <div className='row'><span className='white px9 xs-px12'>By All Sponsors</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px24 bold'>Grand Finals - Esports Tournament & Prize Ceremony</span></div>
                        <div className="row down-3 xs-down-3"><span className='white px14'>Live event - closing night</span></div>
                      </div>
                      <div className="col-3">
                        <div className="container">
                          <div className="container">
                            <div className="down-10 xs-down-5 bg-img-16"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className='row down-20 centered'>
                          <span><ClockOutlineIcon className='icon-1' /></span>
                          <span className='white px11'>8:00 - 10:00 PM </span>
                          <div className='row'><span className='white px11'>02 May 2026</span></div>
                        </div>
                        <div className="row down-7 centered">
                          <span><MapMarkerIcon className='icon-1' /></span>
                          <span className='white px11'>Pier 36 Event Space</span>
                        </div>
                         <div className="row down-7 push-10 centered">
                          <span><TrophyOutlineIcon className='icon-1' /></span>
                          <span className='white px11 '>Prize: $5000 cash + Immersa Champion Trophy + Sponsored gear package from Razer</span>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="container-80">
                          <a className='white row xs-down-5 down-40 btn-curved-3' href="">Buy Ticket <ArrowTopRightIcon className='icon-2' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

        </div>
      </div>
    </>

  )
}

export default ScheduleSection
import CircleSmallIcon from 'mdi-react/CircleSmallIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function TicketsSection() {
  const [selectedTicket, setSelectedTicket] = useState(null)
  console.log("SELECTED", selectedTicket)
  return (

    <>
      <div className="row down-10 xs-down-10">
        <div className="container">
          <div className="col-8 off-2 centered">
            <div><span className="white px45 bold">Get A Ticket</span></div>
          </div>
          <div className="row down-5 xs-down-5">
            <div className="container">
              <div className="col-4 xs-12">
                <div className={ `container card-1 ${selectedTicket === 'full' ? 'ticket-selected' : ''}`}>
                  <div className="container">
                    <div className="row down-5 xs-down-5"><span className="white px24 bold">Full Access Pass</span></div>
                    <div className="row down-2"><span className="white px18">Your gateway into the immersa experience</span></div>
                  </div>
                </div>
                <div className={ `container card-01 ${selectedTicket === 'full' ? 'ticket-selected' : ''}`}>
                  <div className="container">
                    <div className="row down-5 xs-down-5"><span className="bold white px28">$540</span><span className="white">+VAT</span></div>
                    <div className="row down-5"><span className='white'><CircleSmallIcon className='icon-5' /> Access to all main conference <div className='row push-30'><span>sessions </span></div> </span></div>
                    <div className="row down-2"><span className='white'><CircleSmallIcon className='icon-5' /> Entry to gaming & Creative <div className='row push-30'><span>experience Zones</span></div>  </span></div>
                    <div className="row down-2"><span className='white'><CircleSmallIcon className='icon-5' /> Refreshments </span></div>
                    <div className="row down-2"><span className='white'><CircleSmallIcon className='icon-5' /> Network with attendees & creators </span></div>
                    <div className="row down-2"><span className='white'><CircleSmallIcon className='icon-5' /> Access to selected session <div className='row push-30'><span>recordings</span></div> </span></div>
                  </div>
                  <div className="container">
                    <div className="row down-10 xs-down-10">
                      <div className="container gt bg-teal ">
                        <div className="col-8 off-2 centered">
                          <div className="container">
                           <span className='black row down-2 px18' onClick={() => {setSelectedTicket('full') 
                            localStorage.setItem('selectedTicket', 'full')}}>Select This Pass</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <div className="col-4 row xs-down-10">
                <div className={ `container card-2 ${selectedTicket === 'inclusive' ? 'ticket-selected-2' : ''}`}>
                  <div className="container">
                    <div className="row down-5 xs-down-5"><span className="black px24 bold">All-Inclusive Ticket</span></div>
                    <div className="row down-2"><span className="black px18">The full Immersa experience</span></div>
                  </div>
                </div>
                <div className={ `container card-02 ${selectedTicket === 'inclusive' ? 'ticket-selected-2' : ''}`}>
                  <div className="container">
                    <div className="row down-5 xs-down-5"><span className="bold black px28">$699</span><span className="black">+VAT</span></div>
                    <div className="row down-5"><span className='black'><CircleSmallIcon className='icon-8' /> Access to workshops & hands-on <div className='row push-30'><span>sessions</span></div>  </span></div>
                    <div className="row down-2"><span className='black'><CircleSmallIcon className='icon-8' /> Refreshments</span></div>
                    <div className="row down-2"><span className='black'><CircleSmallIcon className='icon-8' /> Priority Entry to keynote talks </span></div>
                    <div className="row down-2"><span className='black'><CircleSmallIcon className='icon-8' /> Exclusive networking lounge <div className='row push-30'><span>access</span></div></span></div>
                    <div className="row down-2"><span className='black'><CircleSmallIcon className='icon-8' /> Full Sessions recording <div className='row push-30'><span>access</span></div></span></div>
                  </div>
                  <div className="container">
                    <div className="row down-10 xs-down-10">
                      <div className="container gt-2 bg-purple ">
                        <div className="col-8 off-2 centered">
                          <div className="container">
                            <span className='white row down-2  px18' onClick={() => {setSelectedTicket('inclusive') 
                            localStorage.setItem('selectedTicket', 'inclusive')}}>Select This Pass</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <div className="col-4 row xs-down-10">
                <div className={ `container card-3 ${selectedTicket === 'premium' ? 'ticket-selected' : ''}`}>
                  <div className="container">
                    <div className="row down-5 xs-down-5"><span className="white px24 bold">Premium experience</span></div>
                    <div className="row down-2"><span className="white px18">For those building the future</span></div>
                  </div>
                </div>
                <div className={ `container card-03 ${selectedTicket === 'premium' ? 'ticket-selected' : ''}`}>
                  <div className="container">
                    <div className="row down-5 xs-down-5"><span className="bold white px28">$899</span><span className="white">+VAT</span></div>
                    <div className="row down-5"><span className='white'><CircleSmallIcon className='icon-5' /> Everything in All-Incusive </span></div>
                    <div className="row down-2"><span className='white'><CircleSmallIcon className='icon-5' /> Meet & greet with speakers </span></div>
                    <div className="row down-2"><span className='white'><CircleSmallIcon className='icon-5' /> Refreshments</span></div>
                    <div className="row down-2"><span className='white'><CircleSmallIcon className='icon-5' />  Portfolio review & expert feedback <div className='row push-30'><span> access </span></div></span></div>
                    <div className="row down-2"><span className='white'><CircleSmallIcon className='icon-5' />  Private networking with industry <div className='row push-30'><span>leaders</span></div></span></div>
                    <div className="row down-2"><span className='white'><CircleSmallIcon className='icon-5' />  Exlusive Immersa merch pack</span></div>
                  </div>
                  <div className="container">
                    <div className="row down-7 xs-down-10">
                      <div className="container gt bg-teal ">
                        <div className="col-8 off-2 centered">
                          <div className="container">
                            <span className='black row down-2 px18' onClick={() => {setSelectedTicket('premium') 
                            localStorage.setItem('selectedTicket', 'premium')}}>Select This Pass</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedTicket && (
        <div className="row down-5 xs-down-10 xs-bottom-50">
          <div className="col-4 off-4 centered">
            <Link to={ `/registernow?ticket=${selectedTicket}`} className="proceed-btn px18">Proceed to Registration <span className='icon'><ArrowRightIcon /></span></Link>
          </div>
        </div>
      )}
    </>
  )
}

export default TicketsSection
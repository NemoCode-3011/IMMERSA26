import CircleSmallIcon from 'mdi-react/CircleSmallIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
function TicketsSection() {
  return (
    <>
      <div className="row down-10 xs-down-10">
        <div className="container">
          <div className="col-8 off-2 centered">
            <div><span className="white px45 bold">Get A Ticket</span></div>
          </div>
          <div className="row down-5 xs-down-5">
            <div className="container">
              <div className="col-4">
                <div className="container card-1 ">
                  <div className="container">
                    <div className="row down-5 xs-down-5"><span className="white px24 bold">Full Access Pass</span></div>
                    <div className="row down-2"><span className="white px18">Your gateway into the immersa experience</span></div>
                  </div>
                </div>
                <div className=" container card-01">
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
                        <div className="col-6 xs-6">
                          <div className="container">
                            <a className='black row down-3' href="/tickets">Get Tickets</a>
                          </div>
                        </div>
                        <div className="col-6 right">
                          <a  href="/tickets"><ArrowRightIcon className='icon-6'/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <div className="col-4 row xs-down-10">
                <div className="container card-2 ">
                  <div className="container">
                    <div className="row down-5 xs-down-5"><span className="black px24 bold">All-Inclusive Ticket</span></div>
                    <div className="row down-2"><span className="black px18">The full Immersa experience</span></div>
                  </div>
                </div>
                <div className=" container card-02">
                  <div className="container">
                    <div className="row down-5 xs-down-5"><span className="bold black px28">$699</span><span className="black">+VAT</span></div>
                    <div className="row down-5"><span className='black'><CircleSmallIcon className='icon-8' /> Access to workshops & hands-on <div className='row push-30 '><span >sessions</span></div>  </span></div>
                    <div className="row down-2"><span className='black'><CircleSmallIcon className='icon-8' /> Refreshments</span></div>
                    <div className="row down-2"><span className='black'><CircleSmallIcon className='icon-8' /> Priority Entry to keynote talks </span></div>
                    <div className="row down-2"><span className='black'><CircleSmallIcon className='icon-8' /> Exclusive networking lounge <div className='row push-30'><span>access</span></div></span></div>
                    <div className="row down-2"><span className='black'><CircleSmallIcon className='icon-8' /> Full Sessions recording <div className='row push-30'><span>access</span></div></span></div>
                  </div>
                  <div className="container">
                    <div className="row down-10 xs-down-5">
                      <div className="container gt-2 bg-purple ">
                        <div className="col-6 xs-6">
                          <div className="container">
                            <a className='row down-3 white' href="/tickets">Get Tickets</a>
                          </div>
                        </div>
                        <div className="col-6 right">
                           <a  href="/tickets"><ArrowRightIcon className='icon-7'/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <div className="col-4 row xs-down-10">
                <div className="container card-3 ">
                  <div className="container">
                    <div className="row down-5 xs-down-5"><span className="white px24 bold">Premium experience</span></div>
                    <div className="row down-2"><span className="white px18">For those building the future</span></div>
                  </div>
                </div>
                <div className=" container card-03">
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
                    <div className="row down-7 xs-down-5">
                      <div className="container gt bg-teal ">
                        <div className="col-6 xs-6">
                          <div className="container">
                            <a className='black row down-3' href="/tickets">Get Tickets</a>
                          </div>
                        </div>
                        <div className="col-6 right">
                           <a  href="/tickets"><ArrowRightIcon className='icon-6'/></a>
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
    </>
  )
}

export default TicketsSection
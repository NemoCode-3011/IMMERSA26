import CalendarBlankOutlineIcon from 'mdi-react/CalendarBlankOutlineIcon';
import ClockOutlineIcon from 'mdi-react/ClockOutlineIcon'
import Countdown from 'react-countdown';
function CountDownTimer() {
  return (
    <>
      <div className="row down-10 xs-down-15">
        <div className="col-6 off-3 centered">
          <div className="row down-10"><span className="w-gradient white px52 xs-px32">IMMERSA 2026</span></div>
          <div className="hr-line"></div>
        </div>
        <div className="row ">
          <div className="col-10 off-1 centered">
            <div><span className='white px24 px170 xs-px60 w-gradient'><Countdown date={new Date('2026-05-01T14:00:00+02:00')} /></span></div>
          </div>
        </div>
        <div className="row ">
          <div className="col-8 off-2 centered">
            <div className='col-2 off-4'>
              <span><CalendarBlankOutlineIcon className='icon' /></span>
              <span className='white text-after-icon w-gradient'>May 1, 2026</span>
            </div>
            <div className='col-2 xs-down-3'>
              <span ><ClockOutlineIcon className='icon' /></span>
              <span className='w-gradient'>10:00 AM PST</span>
            </div>
            <div className='row down-5 xs-down-5'>
              <a className='white btn-curved-4' href="">+ Set Reminder</a>
            </div>
            <div className="row down-5 xs-down-10">
              <div className="col-6 off-3 centered">
                <a className='white px14' href="">ADD TO CALENDAR</a>
              </div>
            </div>
            <div className="row down-3 xs-down-5 push-30">
              <div className="col-6 off-3 centered">
                <div className="col-2 off-1 xs-3">
                  <div className="container glass-card-4">
                    <img src="/assets/google-icon.png" alt="" className='gi-1' />
                    <div className='row pull-10'><span className='white px12'>Google</span></div>
                  </div>
                </div>
                <div className="col-2 off-1 xs-3 xs-off-1">
                  <div className="container glass-card-4">
                    <img src="/assets/apple-icon.png" alt="" className='gi-1' />
                    <div className='row pull-10'><span className='white px12'>Apple</span></div>
                  </div>
                </div>
                <div className="col-2 off-1 xs-3 xs-off-1">
                  <div className="container glass-card-4">
                    <img src="/assets/outlook-icon.png" alt="" className='gi-1' />
                    <div className='row pull-10'><span className='white px12'>Outlook</span></div>
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
export default CountDownTimer
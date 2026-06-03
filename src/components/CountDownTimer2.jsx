import CalendarBlankOutlineIcon from 'mdi-react/CalendarBlankOutlineIcon';
import ClockOutlineIcon from 'mdi-react/ClockOutlineIcon'
import Countdown from 'react-countdown';
function CountDownTimer2() {
  return (
    <>
      <div className="row down-10 xs-down-20">
        <div className="col-6 off-3 centered">
          <div className="row down-10"><span className="w-gradient white px52">IMMERSA 2026</span></div>
          <div className="hr-line"></div>
        </div>
        <div className="row xs-down-3 ">
          <div className="col-10 off-1 centered">
            <div><span className='white px24 px170 xs-px60 w-gradient'><Countdown date={new Date('2026-06-30T14:00:00+02:00')} /></span></div>
          </div>
        </div>
        <div className="row xs-down-2 ">
          <div className="col-8 off-2 centered">
            <div className='col-2 off-4'>
              <span><CalendarBlankOutlineIcon className='icon' /></span>
              <span className='white text-after-icon w-gradient'>Jun 20, 2026</span>
            </div>
            <div className='col-2 xs-row xs-down-2'>
              <span ><ClockOutlineIcon className='icon' /></span>
              <span className='w-gradient'>10:00 AM PST</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CountDownTimer2
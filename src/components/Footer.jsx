import FacebookIcon from 'mdi-react/FacebookIcon';
import GithubIcon from 'mdi-react/GithubIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';
import TwitterIcon from 'mdi-react/TwitterIcon';
import CopyrightIcon from 'mdi-react/CopyrightIcon';
import MapMarkerRadiusOutlineIcon from 'mdi-react/MapMarkerRadiusOutlineIcon';
import CalendarCheckIcon from 'mdi-react/CalendarCheckIcon';
import EmailOutlineIcon from 'mdi-react/EmailOutlineIcon';


function Footer() {
  return (
    <>
      <footer>
        <div className="row down-15 xs-down-30">
          <div className="container f-bg bottom-50">
            <div className="col-4 xs-12 xs-centered">
              <div className="col-2 xs-5 down-10 pull-left-35">
                <img src="./assets/logo-4.png" alt="" className='f-logo xs-push-90' />
              </div>
              <div className="row pull-20">
                <div className='row pull-left-10'><span className="white px16">Where Gaming Meets Creativity</span></div>
              </div>
              <div className="row down-3 xs-down-5 xs-logo-mar">
                <a href=""><GithubIcon className='icon-9' /></a>
                <a href=""><FacebookIcon className='icon-10' /></a>
                <a href=""><TwitterIcon className='icon-10' /></a>
                <a href=""><InstagramIcon className='icon-10' /></a>
              </div>
              <div className="row down-3 xs-down-5">
                <div className='row pull-left-15'><span className='white px14'><CopyrightIcon className='icon-11 ' /> 2026 Immersa. All rights reserved. </span></div>
                <div className='row down-1 pull-left-10'><span className='white px14'>Privacy Policy | Terms & Conditions </span></div>
              </div>
            </div>
            <div className="col-8 down-7 xs-down-15 xs-12">
              <div className="col-1 xs-1 lh-2-0">
                <div><span className='white px24 bold'>Navigate</span></div>
                <a className='white px14 row' href="/">Home</a>
                <a className='white px14 row' href="/About">About</a>
                <a className='white px14 row' href="/Speakers">Speakers</a>
                <a className='white px14 row' href="/Schedule">Schedule</a>
              </div>
              <div className="col-2 xs-3 lh-2-0 push-100">
                <div><span className='white px24 bold'>Event</span></div>
                <a className='white px14 row' href="/Tickets">Tickets</a>
                <a className='white px14 row' href="/RegisterNow">Register Now</a>
                <a className='white px14 row' href="ContactUs">Contact Us</a>
                <a className='white px14 row' href="">FAQ</a>
              </div>
              <div className="col-2 xs-4 lh-2-0 xs-push-15 push-30">
                <div><span className='white px24 bold'>Legal</span></div>
                <a className='white px14 row' href="">Privacy Policy</a>
                <a className='white px14 row' href="">Terms of Service</a>
                <a className='white px14 row' href="">Refund Policy</a>
              </div>
              <div className="col-4 xs-12 xs-down-10 xs-push-2 push-50 lh-2-0">
                <div><span className='white px24  bold push-5'>Contact Info</span></div>
                <div><span className='white px14 xs-px24'><MapMarkerRadiusOutlineIcon className='icon-1' />Location: New York CIty</span></div>
                <div><span className='white px14 xs-px24'><CalendarCheckIcon className='icon-1' />Date: April 1-3, 2026</span></div>
                <a className='white px14 w-gradient xs-px20' href="mailto: helloimmersa2026@gmail.com"><EmailOutlineIcon className='icon-1' />helloimmersa2026@gmail.com</a>
              </div>
            </div>
            <div className="col-12 xs-12 centered">
              <div className="row down-3 xs-down-10"><span className='white px230 xs-px100 w-gradient bold italics'>IMMERSA</span></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
import { Link } from 'react-router-dom'
import AccountIcon from 'mdi-react/AccountIcon';
import MenuIcon from 'mdi-react/MenuIcon';
import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className={isOpen ? 'opened' : ''}>
        <div className="row">
          <div className="col-2 xs-1 md-2 logo-4">
            <img src="./assets/logo-4.png" alt="" />
          </div>
          <div className='col-2 hidden-lg xs-2 md-2 down-3'>
            <span onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon className='hidden-lg  icon-open open-tab' />
            </span>
          </div>
          <div className="col-10  xs-12 md-12 xs-down-25 md-down-5 md-px32  xs-px24 centered down-3">
            <div className="container">
              <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
              <Link to="/speakers" onClick={() => setIsOpen(false)}>SPEAKERS</Link>
              <Link to="/schedule" onClick={() => setIsOpen(false)}>SCHEDULE</Link>
              <Link to="/tickets" onClick={() => setIsOpen(false)}>TICKETS</Link>
              <Link to="/contactus" onClick={() => setIsOpen(false)}>CONTACT US</Link>
              <Link className="glass-card xs-glass-card md-6 push-50 xs-7 md-down-3 xs-down-5 xs-push-50 md-push-200" to="/tickets" onClick={() => setIsOpen(false)}>
                <span className='icon xs-icon'><AccountIcon /></span>
                <span className='xs-px24 px16  md-px32 '>Register Now</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
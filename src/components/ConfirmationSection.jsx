const ConfirmationSection = () => {
  const ticket = localStorage.getItem('selectedTicket')
  
  const ticketNames = {
    full: 'Full Access Pass',
    inclusive: 'All-Inclusive Ticket',
    premium: 'Premium Experience' 
  }

  const bookingRef = 'IMM-2026-' + Math.floor(1000 + Math.random() * 9000)

  return (
    <> 
      <div className="row down-10 xs-down-20 xs-bottom-50">
        <div className="col-8 off-2 centered">
          <div><span className="conf-check">✓</span></div>
          <div className="row down-3"><span className="white px52 bold">You're In!</span></div>
          <div className="row down-2"><span className="white px18">Your spot at Immersa 2026 has been secured.</span></div>
        </div>
      </div>

      <div className="row down-5 xs-down-5">
        <div className="col-6 off-3 xs-8 xs-off-1">
          <div className="conf-card row">
            <div className="row pull-10">
              <span className="w-gradient px18 xs-px24">BOOKING CONFIRMATION</span>
            </div>
            <div className="row down-5 xs-down-5">
              <span className="white px14">Booking Reference</span>
              <div className="row down-1 xs-down-1"><span className="w-gradient px18 bold">{bookingRef}</span></div>
            </div>
            <div className="row down-5 xs-down-5">
              <span className="white px14">Ticket</span>
              <div className="row down-1"><span className="white px18 bold">{ticketNames[ticket] || 'Full Access Pass'}</span></div>
            </div>
            <div className="row down-3 xs-down-3">
              <span className="white px14">Date</span>
              <div className="row down-1 xs-down-1"><span className="white px18 bold">April 10–12, 2026</span></div>
            </div>
            <div className="row down-3 xs-down-3">
              <span className="white px14">Location</span>
              <div className="row down-1 xs-down-1"><span className="white px18 bold">New York City, USA</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row down-5 xs-down-10">
        <div className="col-8 off-2 xs-12">
          <div className="col-4 xs-3">
            <div className="conf-next-card xs-conf-next-card row">
              <div><span className="px24">📅</span></div>
              <div className="row down-2"><span className="white px14 bold">Add to Calendar</span></div>
              <div className="row down-1"><span className="white px12">Save Immersa 2026 to your calendar</span></div>
            </div>
          </div>
          <div className="col-3 off-1 xs-3 xs-off-1">
            <div className="conf-next-card xs-conf-next-card row">
              <div><span className="px24">📧</span></div>
              <div className="row down-2"><span className="white px14 bold">Check Your Email</span></div>
              <div className="row down-1"><span className="white px12">Your confirmation has been sent</span></div>
            </div>
          </div>
          <div className="col-3 off-1 xs-3 xs-off-1">
            <div className="conf-next-card xs-conf-next-card xs-bottom-30 row">
              <div><span className="px24">🔗</span></div>
              <div className="row down-2"><span className="white px14 bold">Share The News</span></div>
              <div className="row down-1"><span className="white px12">Tell your network you're attending</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row down-5 xs-down-10 xs-bottom-50">
        <div className="col-8 off-2 centered">
          <div><span className="white px18">While you wait — explore what's coming</span></div>
          <div className="row down-5 xs-down-10">
            <a href="/" className="reg-btn">Explore Immersa</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default ConfirmationSection
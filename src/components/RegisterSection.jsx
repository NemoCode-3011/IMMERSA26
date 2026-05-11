import { useNavigate } from "react-router-dom"

const ticketData = {
  full: {
    name: "Full Access Pass",
    price: "$540",
    features: [
      "Access to all main conference sessions",
      "Entry to gaming & creative experience zones",
      "Network with attendees & creators"
    ]
  },

  inclusive: {
    name: "All-Inclusive Ticket",
    price: "$699",
    features: [
      "Access to workshops & hands-on sessions",
      "Priority entry to keynote talks",
      "Exclusive networking lounge access"
    ]
  },

  premium: {
    name: "Premium Experience",
    price: "$899",
    features: [
      "Everything in All-Inclusive",
      "Meet & greet with speakers",
      "Exclusive Immersa merch pack"
    ]
  }
}

const RegisterSection = ({ ticket }) => {

  const navigate = useNavigate()

  const selectedTicketData = ticketData[ticket] || ticketData.full

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/confirmation")
  }

  return (
    <>
      <div className="row down-10 xs-down-20 xs-bottom-50">
        <div className="col-6 off-3 centered"><span className="white px45 w-gradient"> IMMERSA 2026</span>
          <div className="row down-2"><span className="white px45 bold">You're One Step Away...</span></div>
          <div className="row down-2 xs-down-2"><span className="white px18"> Secure your spot at Immersa 2026</span>
          </div>
        </div>
      </div>
      <div className="row down-3 xs-down-5">
        <div className="col-6 off-3 xs-8 xs-off-1 centered">
          <div className="reg-ticket-card row"><span className="white px24 bold"> {selectedTicketData.name}</span>
            <div className="row "><span className="w-gradient px32 bold">{selectedTicketData.price}</span><span className="white"> +VAT</span></div>
            {selectedTicketData.features.map((feature, index) => (
              <div key={index} className="row down-1">
                <span className="white px14">
                  ✓ {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row down-5 xs-down-5 xs-bottom-50">
        <div className="col-6 off-3 xs-8 xs-12 centered">
          <form className="reg-form xs-reg-form" onSubmit={handleSubmit}><div className="row pull-20 push-10 xs-pull-5 "><span className="white px24 w-gradient xs-px14">JOIN 500+ CREATORS, GAMERS AND DEVELOPERS</span></div>
            <div className="row down-10 xs-down-10">
              <input type="text" placeholder="Full Name" className="reg-input" required />
            </div>
            <div className="row down-5 xs-down-5">
              <input type="email" placeholder="Email Address" className="reg-input" required />
            </div>
            <div className="row down-3 xs-down-3"><input type="tel" placeholder="Phone Number" className="reg-input" required />
            </div>
            <div className="row down-5 xs-down-10 col-6 off-3"><button type="submit" className="reg-btn px18 bold">Secure My Spot</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default RegisterSection
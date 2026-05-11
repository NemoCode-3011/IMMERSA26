import PhoneIcon from 'mdi-react/PhoneIcon'
import EmailOutlineIcon from 'mdi-react/EmailOutlineIcon';
import MapMarkerRadiusOutlineIcon from 'mdi-react/MapMarkerRadiusOutlineIcon';
const ContactUsSection = () => {
  return (
    <>
      <div className="row down-10 xs-down-20">
        <div className="container-80 curved-10 xs-container-92">
          <div className="col-6 xs-bottom-100 glass-card-5 index-3 xs-glass-card-5 ">
            <div className="row down-3"><span className=" w-gradient px52">Get In Touch</span></div>
            <div className="row down-2"><span className="white  px16">Got questions about Immersa 2026? we'd love to hear from you.</span></div>
            <form action="">
              <div className="row down-7 xs-down-5">
                <div className="col-12">
                  <div className="form-group">
                    <input type="text" placeholder="Full Name" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <input type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-5 off-1">
                  <div className="form-group">
                    <input type="tel" placeholder="Phone No" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea placeholder="Message" rows={4}></textarea>
                  </div>
                </div>
              </div>
              <div className="form-check">
                <input type="checkbox" id="updates" />
                <label htmlFor="updates">
                  Keep me updated on Immersa 2026 announcements, speakers, and early bird offers
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="privacy" />
                <label htmlFor="privacy">
                  I agree to the Immersa 2026 privacy policy
                </label>
              </div>
              <div className="row down-3">
                <div className="col-8 off-2 centered">
                  <button type="submit" className="btn-curved-6 bg-purple white">SEND MESSAGE</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-5 r-cus xs-r-cus xs-row xs-down-10 xs-bottom-50 ">
            <div className="container-80 xs-container-92 down-7">
              <div className='row xs-down-10'><span><PhoneIcon className='icon glass-card-4 centered' /></span> <span className='white px24 words'>Call Us</span></div>
              <div className="row push-40"><span className='white px14'>+1 7579483203</span></div>
              <div className="row down-20 xs-down-10"><span><EmailOutlineIcon className='icon glass-card-4 centered'/></span><span className='white words px24'>Email Us</span></div>
              <div className="row push-40"><span className='white px14'>hello@immersa2026.com</span></div>
              <div className="row down-20 xs-down-10"><span><MapMarkerRadiusOutlineIcon className='icon glass-card-4 centered'/></span><span className='white words px24'>Visit Us</span></div>
              <div className="row push-40"><span className='white px14'>Immersa Labs, Manhattan, New York City</span></div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsSection
import { useState } from 'react'

const faqs = [
  { id: 1, question: "What is Immersa 2026?", answer: "Immersa 2026 is a three-day conference where gaming, creativity, and technology collide. It's a space built for gamers, designers, and developers to connect, build, and experience the future together." },
  { id: 2, question: "Who is Immersa for?", answer: "Immersa is for gamers, designers, developers, and content creators, and anyone passionate about the intersection of gaming and creative technology. Whether you're a professional or just starting out, Immersa is built for you." },
  { id: 3, question: "How do I register?", answer: "Simply click the Register Now button at the top of the page,, choose your ticket tier fill in your details, and secure your spot." },
  { id: 4, question: "Can I get a refund?", answer: "Refunds are available up to 7 days before the event. After that, tickets are non-refundable but can be transferred to another person. Contact us at helloimmersa2026@gmail.com for assistance" },
  { id: 5, question: "Will sessions be recorded?", answer: "Selected sessions will be recorded for Pro and VIP pass holders. Some keynotes maybe live streamed. Stay tuned to our socials for updates." },
]

const FAQSection = () => {

  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <>
      <div className="row down-15 xs-down-50">
        <div className="col-8 off-2 centered">
          <div>
            <span className="white px45 xs-px32">Frequently Asked Questions</span>
          </div>
          <div className="row down-2 xs-down-5">
            <span className="white px16 xs-px14">Find answers to common questions about Immersa 2026</span>
          </div>
        </div>
      </div>
      <div className="row down-3 xs-down-5">
        <div className="col-8 off-2 xs-12 ">
          {faqs.map((faq, index) => (
            <div key={faq.id} className={`faq-item xs-faq-item ${activeIndex === index ? 'faq-active' : ''}`} onClick={() => toggle(index)}>
              <div className="row pull-10">
                <div className="col-10 xs-7">
                  <span className="white">{faq.question}</span>
                </div>
                <div className="col-2 xs-5 centered">
                  <span className="faq-icon">{activeIndex === index ? '✕' : '+'}</span>
                </div>
              </div>
              {activeIndex === index && (
                <div className="row down-3">
                  <div className="container-99 xs-container-99 xs-down-5">
                     <div className='row '><span className="faq-answer">{faq.answer}</span></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="row down-4">
        <div className="col-8 off-2 centered">
          <span className="white">Still have questions? <a href="/contactus" className="faq-link">Contact Us</a></span>
        </div>
      </div>
    </>
  )
}

export default FAQSection
import React, { useState } from 'react'
import './faq.css'
import Navbar from '../../components/navbar/Navbar'
import Form_Popup from '../../components/form_popup/Form_Popup'
import Footer from '../../components/footer/Footer'

function faq() {
    const [showForm, setShowForm] = useState(false);

  return (
    <div>
        <Navbar setShowForm={setShowForm} />

        {showForm && <Form_Popup setShowForm={setShowForm} />}

      <div className="faqs"><h1>FREQUENTLY ASKED QUESTIONS</h1></div>
    <div className="buyers-container">
        <h2>FAQ's for Buyers</h2>
        <p>Are you making purchases and you need help!</p>

        <div className="faq-item">
            <p className="question">Q. How can I buy tickets on this website?</p>
            <p className="answer">A. Register on the website and log in with your username and password click on the events you wish to purchase and choose the quantity check out and pay with any of the payment platform.</p>
        </div>
        
        <div className="faq-item">
            <p className="question">Q. I got a bar code what should I do next?</p>
            <p className="answer">A. Dear customer the bar code represent your tickets please bring it to the venue for verification you can print it out.</p>
        </div>
        
        <div className="faq-item">
            <p className="question">Q. Where do the tickets go to after purchase?</p>
            <p className="answer">A. Dear customer after buying online the e-tickets which contain bar codes and tickets I.D will be sent to your registered e-mail address print it out and bring it to the venue.</p>
        </div>
        <div className="faq-item">
            <p className="question">Q. I will love to make or book for table ticket?</p>
            <p className="answer">A. Please call the customer support number for booking and table reservation.</p>
        </div>
        
        <div className="faq-item">
            <p className="question">Q. I will like to know any concert or show coming up this month?</p>
            <p className="answer">A. Kindly check the website for the featured event, time, and venue.</p>
        </div>
        
        <div className="faq-item">
            <p className="question">Q. Where can I get the physical tickets?</p>
            <p className="answer">A. Kindly click on Partner outlets on the top menu on the website. There you get the address of our distribution outlets across Nigeria.</p>
        </div>
        <h2>FAQ's for Organisers</h2>
        <p>Are you organising an event and you need help?</p>

        <div className="faq-item">
            <p className="question">Q. How do upload or put my event on alpha tickets?</p>
            <p className="answer">A. Register on the website lunch on your profile and click on the upload event menu.</p>
        </div>
        
        <div className="faq-item">
            <p className="question">Q. How can I check for sales?</p>
            <p className="answer">A. Access your profile with the user name and password click the view tickets sales on your event menu.</p>
        </div>
        
        <div className="faq-item">
            <p className="question">Q. Want to host an event so want you people in it?</p>
            <p className="answer">A. Kindly contact the customer support.</p>
        </div>
    </div>
    <div className="contact-us">
        <strong><p>Still have questions? Our team can help. <a href="#">Contact us</a>.</p></strong>
    </div>

    <Footer/>
    </div>
  )
}

export default faq

import React, { useState } from 'react'
import './contact.css'
import Navbar from '../../components/navbar/Navbar'
import Form_Popup from '../../components/form_popup/Form_Popup'
import Footer from '../../components/footer/Footer'

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Navbar setShowForm={setShowForm} />

      {showForm && <Form_Popup setShowForm={setShowForm} />}

      <div className="contact-container">
        <div className="contact-info">
            <h1>TALK TO US!</h1> <br/>
            <p>Need Help? Our team are on stand by to assist you. Simply fill out the form to the right, and we will be in touch shortly.</p> <br/>
            <p><strong>Phone:</strong> 0908 678 7099</p> <br/>
            <p><strong>Email:</strong> ewangchallain@gmail.com</p> <br/>
            <p><strong>Address:</strong> Lola Holloway Street, Omole Phase 1, Ojodu, Lagos, Nigeria</p> <br/>
            <p><strong>Work:</strong> 9:30 AM - 6:00 PM</p> <br/>
        </div>
        
        <div className="contact-form">
            <form action="#" method="post">
                <label htmlFor="name">Your Name*</label>
                <input type="text" placeholder="Enter full name" id="name" name="name" required/>
                
                <label htmlFor="email">Your Email*</label>
                <input type="email" placeholder="Enter your email" id="email" name="email" required/>
                
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject"/>
                
                <label htmlFor="message">Your Message</label>
                <textarea id="message" placeholder="Enter your message" name="message" rows="4"></textarea>
                
                <button type="submit">SEND</button>
            </form>
        </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15897.65391361444!2d7.9315525!3d5.036508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1067f96b847a9bb9%3A0x25edcad3d85a4eef!2sMita%20School%20-%20Learn%20Web%2C%20App%20Development%20Training%20Center%20in%20Uyo%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1721587831244!5m2!1sen!2sng" width="100%" height="600" style={{border:"0"}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
    <Footer/>
    </div>
  )
}

export default Contact

import React, { useState } from "react";
import './about.css'
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Form_Popup from "../../components/form_popup/Form_Popup";
import Newsletter from "../../components/newsletter/Newsletter";

const About = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Navbar setShowForm={setShowForm} />

      {showForm && <Form_Popup setShowForm={setShowForm} />}

      <div className="heading">
        <h1 style={{ color: "rgb(234, 105, 58)" }}>
          {" "}
          <b>HASSLE-FREE SELLING WITH ALPHA TICKETS</b>
        </h1>
        <h6>
          We manage the entire transaction process for you. From delivering the
          tickets to the buyer after a sale to ensuring you receive your
          payment, we've got you covered at every step.
        </h6>
      </div>

      <div className="container-one">
        <div className="features">
          <div className="feature">
            <img
              src="https://img.icons8.com/color/96/000000/add-shopping-cart--v1.png"
              alt="Instant Booking"
            />
            <h3>Quick Instant Booking</h3>
            <p>
              Booking a ticket on Alpha Tickets is very easy and fast! It takes
              less than 2mins to register and you'll have your ticket sent to
              your email
            </p>
          </div>
          <div className="feature">
            <img
              src="https://img.icons8.com/?size=100&id=68935&format=png&color=000000"
              alt="Secure Payment"
            />
            <h3>Secure Payment Gateway</h3>
            <p>
              All payment processors we use are fully PCI-DSS 3.0 compliant.
              This means that all card information is processed in a completely
              safe environment.
            </p>
          </div>
          <div className="feature">
            <img
              src="https://img.icons8.com/color/96/000000/user-male-circle--v1.png"
              alt="User-friendly Platform"
            />
            <h3>User-friendly Platform</h3>
            <p>
              Our platform is designed and developed with the masses at heart.
              It's very simple to navigate, efficient, intuitive and uses less
              data.
            </p>
          </div>
          <div className="feature">
            <img
              src="https://img.icons8.com/?size=100&id=35127&format=png&color=000000"
              alt="Organizer Dashboard"
            />
            <h3>Organizer Dashboard</h3>
            <p>
              As an organizer, you can manage your events from anywhere...
              Access real-time sales and check-in data, manage, reports etc.
              from any device.
            </p>
          </div>
          <div className="feature">
            <img
              src="https://img.icons8.com/color/96/000000/request-money.png"
              alt="Request Payout Anytime"
            />
            <h3>Request Payout Anytime</h3>
            <p>
              Payout requests can be made anytime! Once your information has
              been verified, you'll receive payments directly in your bank
              account.
            </p>
          </div>
          <div className="feature">
            <img
              src="https://img.icons8.com/color/96/000000/more.png"
              alt="And Many More"
            />
            <h3>...and Many More</h3>
            <p>
              Yes! And a lot more other features including report export in pdf
              or excel, coupon management, unique QR codes for each ticket etc.
            </p>
          </div>
        </div>
      </div>

      <div className="price-banner">
        <div className="pricing">
          <h2 className="title">
            Gain Exclusive <br />
            Access
          </h2>
          <h3 className="price">
            $29<span>/month</span>
          </h3>
          <p className="description">
            Unlock exclusive access to our premium content library. Discover and
            enjoy high-quality videos on the devices you love.
          </p>
          <b className="offer">Act fast! Offer ends on September 20, 2024.</b>
          <a className="subscribe-button" href="#">
            JOIN NOW
          </a>
          <div className="ribbon-wrap">
            <div className="ribbon">Special Offer!</div>
          </div>
        </div>
      </div>

      <Newsletter/>
      <Footer />
    </div>
  );
};

export default About;

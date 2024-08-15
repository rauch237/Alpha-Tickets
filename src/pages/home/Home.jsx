import "./home.css";
import React,{ useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Form_Popup from "../../components/form_popup/Form_Popup";
import Newsletter from "../../components/newsletter/Newsletter";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Navbar setShowForm={setShowForm} />

      {showForm && <Form_Popup setShowForm={setShowForm} />}

      <div className="video-background">
        <video autoPlay muted loop id="bg-video">
          <source
            src="images/6274534-uhd_3840_2160_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="overlay"></div>
        <div className="content">
          <strong>
            <h3 style={{ fontWeight: "700" }}>Elevate Your Event Experience</h3>
          </strong>
          <div className="event-buttons">
            <a href="#create" className="btn event-btn create-popup">
              Create Event
            </a>
            <a href="./services" className="btn event-btn">
              Find Events
            </a>
          </div>
          <b>
            <p>
              Introducing Alpha Tickets, the ultimate event ticketing platform
              for African experiences. Easily create, manage, and sell tickets
              to live or virtual events, all from the convenience of your mobile
              phone. Receive payments effortlessly, making event management a
              breeze
            </p>
          </b>
        </div>
      </div>

      <div className="categories">
        <h1>Categories</h1>
        <div className="flex-container">
          <div className="box">
            <i className="fa-solid fa-icons"></i>
            <span>Performing Arts and Culture</span>
          </div>
          <div className="box">
            <i className="fa-solid fa-hand-holding-heart"></i>
            <span>Social Impact Initiatives</span>
          </div>
          <div className="box">
            <i className="fa-solid fa-champagne-glasses"></i>
            <span>Leisure and Adventure</span>
          </div>
          <div className="box">
            <i className="fa-solid fa-chart-line"></i>
            <span> Business and Social Networking</span>
          </div>
          <div className="box">
            <i className="fa-solid fa-heart"></i>
            <span>Spirituality and Devotion</span>
          </div>
          <div className="box">
            <i className="fa-solid fa-dumbbell"></i>
            <span>Fitness and Nutrition</span>
          </div>
        </div>
      </div>

      <div className="stats-img">
        <a href="">
          <img src="./images/home-page.png" alt="" />
        </a>
      </div>

      <div className="container">
        <div className="event-card">
          <a href="">
            <img src="./event-cards/card 38.jpg" alt="Event 1" />
          </a>
          <div className="event-details">
            <p className="location">UYO</p>
            <h3>Kids Tech Holiday Program</h3>
            <p className="date">Friday, July 26</p>
          </div>
        </div>
        <div className="event-card">
          <a href="">
            <img src="./event-cards/card 2.jpg" alt="Event 2" />
          </a>
          <div className="event-details">
            <p className="location">
              Foursquare Gospel Church, Harmony Estate, Lagos.
            </p>
            <h3>Worshipers Night Of Wonders</h3>
            <p className="date">Saturday, August 10</p>
          </div>
        </div>
        <div className="event-card">
          <a href="">
            <img src="./event-cards/card 3.jpeg" alt="Event 3" />
          </a>
          <div className="event-details">
            <p className="location">
              Anthony Recreation Center, Anthony, Maryland, Lagos.
            </p>
            <h3>The COK</h3>
            <p className="date">Saturday, August 10</p>
          </div>
        </div>
        <div className="event-card">
          <a href="">
            <img src="/event-cards/card 4.png" alt="Event 1" />
          </a>
          <div className="event-details">
            <p className="location">
              Anthony Recreation Center, Anthony, Maryland, Lagos.
            </p>
            <h3>Mainland Youth Festival</h3>
            <p className="date">Friday, July 26</p>
          </div>
        </div>
        <div className="event-card">
          <a href="">
            <img src="./event-cards/card 5.jpeg" alt="Event 2" />
          </a>
          <div className="event-details">
            <p className="location">Victoria Island, Lagos.</p>
            <h3>Connect Nigeria Business Mixers, July 2024</h3>
            <p className="date">Saturday, August 10</p>
          </div>
        </div>
        <div className="event-card">
          <a href="">
            <img src="./event-cards/card 8.jpg" alt="Event 3" />
          </a>
          <div className="event-details">
            <p className="location">
              Star View Palace Hotel, 5th Avenue, Gwarinpa
            </p>
            <h3>Capital Plug Pool Party 2.0</h3>
            <p className="date">Saturday, August 10</p>
          </div>
        </div>
        <div className="event-card">
          <a href="">
            <img src="/event-cards/card 6.jpeg" alt="Event 1" />
          </a>
          <div className="event-details">
            <p className="location">Deportivo Bar, Nwaniba, Uyo</p>
            <h3>Cloud 9, The Party </h3>
            <p className="date">Friday, July 26</p>
          </div>
        </div>
        <div className="event-card">
          <a href="">
            <img src="./event-cards/card 9.jpg" alt="Event 2" />
          </a>
          <div className="event-details">
            <p className="location">ETF Auditorium, FUTO</p>
            <h3>Dance Invasion</h3>
            <p className="date">Saturday, August 10</p>
          </div>
        </div>
        <div className="event-card">
          <a href="">
            <img src="./event-cards/card 10.jpg" alt="Event 3" />
          </a>
          <div className="event-details">
            <p className="location">Sweet Flavour Hotel Ukwulu</p>
            <h3>Home Coming 2.0, All white party.</h3>
            <p className="date">Saturday, August 10</p>
          </div>
        </div>
      </div>

      <Newsletter />

      <Footer />
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import "./services.css"
import Navbar from "../../components/navbar/Navbar";
import Form_Popup from "../../components/form_popup/Form_Popup";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";

function Services() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
     <Navbar setShowForm={setShowForm} />

     {showForm && <Form_Popup setShowForm={setShowForm} />}

      <Carousel/>
      <div className="events-container">
        <h3 style={{ textAlign: "center", color: "#ea693a" }}>
          Popular Events
        </h3>
        <div className="container">
          <div className="event-card">
            <a href="">
              <img src="./event-cards/card 1.jpg" alt="Event 1" />
            </a>
            <div className="event-details">
              <p className="location">Lagos</p>
              <h3>African Club Mirror Mirror Vol. 3</h3>
              <p className="date">Friday, July 26</p>
            </div>
          </div>
          <div className="event-card">
            <a href="#">
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
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/services">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="./page-2">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="./page-3">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="./page-4">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="./page-2" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Footer/>
    </div>
  );
}

export default Services;

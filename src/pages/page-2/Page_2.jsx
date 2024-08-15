import React, { useState } from "react";
import "../services/services.css";
import Navbar from "../../components/navbar/Navbar";
import Form_Popup from "../../components/form_popup/Form_Popup";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";

const Page_2 = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Navbar setShowForm={setShowForm} />

      {showForm && <Form_Popup setShowForm={setShowForm} />}

      <Carousel />
      <div className="events-container">
        <h3 style={{ textAlign: "center", color: "#ea693a" }}>
          Popular Events
        </h3>
        <div className="container">
          <div className="event-card">
            <a href="">
              <img src="./event-cards/card 11.jpg" alt="Event 1" />
            </a>
            <div className="event-details">
              <p className="location">Owerri</p>
              <h3>Frank Talker, LAUGHTER FINESSE</h3>
              <p className="date">Friday, July 26</p>
            </div>
          </div>
          <div className="event-card">
            <a href="">
              <img src="./event-cards/card 12.jpg" alt="Event 2" />
            </a>
            <div className="event-details">
              <p className="location">Coca Lounge Ukwulu.</p>
              <h3>Freshers Night</h3>
              <p className="date">Saturday, August 10</p>
            </div>
          </div>
          <div className="event-card">
            <a href="">
              <img src="./event-cards/card 13.jpg" alt="Event 3" />
            </a>
            <div className="event-details">
              <p className="location">
                Anthony Recreation Center, Anthony, Maryland, Lagos.
              </p>
              <h3></h3>
              <p className="date">Saturday, August 10</p>
            </div>
          </div>
          <div className="event-card">
            <a href="">
              <img src="/event-cards/card 14.jpg" alt="Event 1" />
            </a>
            <div className="event-details">
              <p className="location">Lagos</p>
              <h3>Connect Nigeria Business Mixers, July 2024</h3>
              <p className="date">Friday, July 26</p>
            </div>
          </div>
          <div className="event-card">
            <a href="">
              <img src="./event-cards/card 15.jpg" alt="Event 2" />
            </a>
            <div className="event-details">
              <p className="location">
                Anthony Recreation Center, Anthony, Lagos.
              </p>
              <h3>Mainland Youth Festival</h3>
              <p className="date">Saturday, August 10</p>
            </div>
          </div>
          <div className="event-card">
            <a href="">
              <img src="./event-cards/card 16.jpg" alt="Event 3" />
            </a>
            <div className="event-details">
              <p className="location">
                Anthony Recreation Center, Anthony, Maryland, Lagos.
              </p>
              <h3>Mainland Youth Festival</h3>
              <p className="date">Saturday, August 10</p>
            </div>
          </div>
          <div className="event-card">
            <a href="">
              <img src="/event-cards/card 17.jpg" alt="Event 1" />
            </a>
            <div className="event-details">
              <p className="location">Lagos</p>
              <h3>Connect Nigeria Business Mixers, July 2024</h3>
              <p className="date">Friday, July 26</p>
            </div>
          </div>
          <div className="event-card">
            <a href="">
              <img src="./event-cards/card 18.jpg" alt="Event 2" />
            </a>
            <div className="event-details">
              <p className="location">
                Anthony Recreation Center, Anthony, Lagos.
              </p>
              <h3>Mainland Youth Festival</h3>
              <p className="date">Saturday, August 10</p>
            </div>
          </div>
          <div className="event-card">
            <a href="">
              <img src="./event-cards/card 19.jpg" alt="Event 3" />
            </a>
            <div className="event-details">
              <p className="location">
                Anthony Recreation Center, Anthony, Maryland, Lagos.
              </p>
              <h3>Mainland Youth Festival</h3>
              <p className="date">Saturday, August 10</p>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/services.html">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="./page_2.html">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="./page_3.html">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="./page_4.html">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="./page_3.html" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Footer />
    </div>
  );
};

export default Page_2;

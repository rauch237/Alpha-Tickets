import React from 'react'
import './carousel.css'

const Carousel = () => {
  return (
    <div
    className="carousel slide"
    data-bs-ride="carousel"
    id="carouselExampleIndicators"
  >
    <div className="carousel-indicators">
      <button
        aria-label="Slide 1"
        className="active"
        data-bs-slide-to="0"
        data-bs-target="#carouselExampleIndicators"
        type="button"
      ></button>{" "}
      <button
        aria-label="Slide 2"
        data-bs-slide-to="1"
        data-bs-target="#carouselExampleIndicators"
        type="button"
      ></button>{" "}
      <button
        aria-label="Slide 3"
        data-bs-slide-to="2"
        data-bs-target="#carouselExampleIndicators"
        type="button"
      ></button>
    </div>
    <div className="slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            alt="..."
            className="d-block w-100"
            id="img-fluid"
            src="./images/davido.webp"
          />
          <div className="carousel-caption">
            <h5
              className="animated bounceInRight"
              style={{ animationDelay: "1s" }}
            >
              <b>OBO 001</b>
            </h5>
            <p
              className="animated bounceInLeft d-none d-md-block"
              style={{ animationDelay: "2s" }}
            >
              <b>Live In Concert</b>
            </p>
            <p
              className="animated bounceInRight"
              style={{ animationDelay: "3s" }}
            >
              <a href="#" className="get-tickets">
                Get Tickets
              </a>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            alt="..."
            className="d-block w-100"
            id="img-fluid"
            src="./images/popsy.jpg"
          />
          <div className="carousel-caption">
            <h5
              className="animated bounceInRight"
              style={{ animationDelay: "1s" }}
            >
              <b>POPSY 002</b>
            </h5>
            <p
              className="animated bounceInLeft d-none d-md-block"
              style={{ animationDelay: "2s" }}
            >
              <b>Album Tour</b>
            </p>
            <p
              className="animated bounceInRight"
              style={{ animationDelay: "3s" }}
            >
              <a href="#">Get Tickets</a>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            alt="..."
            className="d-block w-100"
            id="img-fluid"
            src="./images/Burna-Boy.webp"
          />
          <div className="carousel-caption">
            <h5
              className="animated bounceInRight"
              style={{ animationDelay: "1s" }}
            >
              <b>ODOGWU 003</b>
            </h5>
            <p
              className="animated bounceInLeft d-none d-md-block"
              style={{ animationDelay: "2s" }}
            >
              <b>Live In Concert</b>
            </p>
            <p
              className="animated bounceInRight"
              style={{ animationDelay: "3s" }}
            >
              <a href="#">Get Tickets</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      data-bs-slide="prev"
      data-bs-target="#carouselExampleIndicators"
      type="button"
    >
      <span
        aria-hidden="true"
        className="carousel-control-prev-icon"
      ></span>{" "}
      <span className="visually-hidden">Previous</span>
    </button>{" "}
    <button
      className="carousel-control-next"
      data-bs-slide="next"
      data-bs-target="#carouselExampleIndicators"
      type="button"
    >
      <span
        aria-hidden="true"
        className="carousel-control-next-icon"
      ></span>{" "}
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel

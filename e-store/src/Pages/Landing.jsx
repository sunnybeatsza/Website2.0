// Importing React, Navbar component, and styles for the Landing component
import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import "../Components/Landing/Landing.css";

// Landing component definition
export const Landing = () => {
  // Rendering the Landing component
  return (
    <div>
      {/* Navbar component */}
      <Navbar />

      {/* Main content container with background photo */}
      <div className="container col-xxl-8 px-4 py-5 background-photo">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6"></div>
          <div className="col-lg-6">
            {/* Heading and description for the landing page */}
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Olympian Opulence - Elevate Your Style
            </h1>
            <p className="lead fw-bold">
              Step into the world of Olympian Opulence, where sophistication
              meets innovation in fashion. Our curated collection blends
              timeless classics with avant-garde designs, offering you
              unparalleled craftsmanship and timeless elegance.
            </p>
            {/* Button to learn more */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section with additional information and a call-to-action button */}
      <div className="m-5">
        <div className="p-5 mb-4 bg-body-tertiary rounded-3 background-photo2">
          <div className="container-fluid py-5">
            {/* Heading and description for the high-profile section */}
            <h1 className="display-5 fw-bold">High Profile</h1>
            <p className="col-md-8 fs-4 fw-bold">
              "At Olympian Opulence, we take pride in our collaborations with
              some of the most iconic names in the fashion industry. Our runway
              has graced the footsteps of high-profile models who embody
              elegance and redefine beauty with every step. From partnering with
              internationally acclaimed supermodels to collaborating with
              trendsetting brands, our journey is adorned with the grace of
              those who set the standards in the world of high fashion. Join us
              as we continue to craft a narrative that intertwines our legacy
              with the luminaries of the fashion realm, creating a space where
              style transcends boundaries and innovation knows no limits."
            </p>
            {/* Button for portfolio */}
            <button className="btn btn-primary btn-lg" type="button">
              Portfolio
            </button>
          </div>
        </div>

        {/* Two-column section with information and learn more buttons */}
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3 background-photo3">
              {/* Heading and description for the "Crafted with Precision" section */}
              <h2>Crafted with Precision</h2>
              <p>
                Experience fashion redefined at Olympian Opulence. Our
                commitment to excellence is evident in every stitch and choice
                of fabric. Immerse yourself in garments that embody
                uncompromising quality and timeless style.
              </p>
              {/* Button to learn more */}
              <button className="btn btn-outline-light" type="button">
                Learn more
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3 background-photo4 text-light">
              {/* Heading and description for the "Luxury Unveiled" section */}
              <h2>Luxury Unveiled</h2>
              <p>
                Indulge in pure luxury with Olympian Opulence. Our garments are
                a testament to unmatched quality, crafted from the finest global
                fabrics. From sumptuous silks to buttery-soft cashmeres, elevate
                your wardrobe with elegance that speaks volumes.
              </p>
              {/* Button to learn more */}
              <button className="btn btn-outline-secondary" type="button">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
